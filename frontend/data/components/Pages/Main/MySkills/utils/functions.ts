const getRandomNumber = (min:number, max:number) => {
  return Math.random() * (max - min) + min;
}

const chechkForCollides = (x:number, y:number, radius:number, arr:any[], repeated = 1):Function|{x:number, y:number} => {
  repeated++;
  if (repeated >= 100) {
    console.error("Can't get needed dimesions, returning current dimesions");
    return {
      x, y
    }
  }
  let hasCollides = false;
  arr.forEach((elem: {x:number, y: number}) => {
    if ((Math.abs(elem.x - x) < radius) && (Math.abs(elem.y - y) < radius)) {
      hasCollides = true;
    }
  });
  if (hasCollides) {
    var random_boolean_x = Math.random() < 0.5;
    if (random_boolean_x) {
      x = x + radius / 2;
    } else {
      x = x - radius / 2;
    }
    var random_boolean_y = Math.random() < 0.5;
    if (random_boolean_y) {
      y = y + radius / 2;
    } else {
      y = y - radius / 2;
    }
    return chechkForCollides(x, y, radius, arr, repeated)
  } else
    return {
      x,
      y
    }
}

const getRandomDims = (
  xLimitsMin: number,
  xLimitsMax: number,
  yLimitsMin: number,
  yLimitsMax: number,
  radius: number,
  dimsArr: any[]):Function|{x:number, y:number} => {
  const dimesionX = getRandomNumber(xLimitsMin, xLimitsMax);
  const dimesionY = getRandomNumber(yLimitsMin, yLimitsMax);
  const { x, y } = chechkForCollides(dimesionX, dimesionY, radius, dimsArr) as any;
  if (x < xLimitsMin || x > xLimitsMax || y < yLimitsMin || y > yLimitsMax) {
    return getRandomDims(xLimitsMin, xLimitsMax, yLimitsMin, yLimitsMax, radius, dimsArr);
  }
  else {
    return ({ x, y });
  }
}

export const getDimesions = (xDimesion = [0, 1000], yDimesion = [0, 500], radius = 50, count = 20) => {
  const xLimitsMin = xDimesion[0]
  const xLimitsMax = xDimesion[1];
  const yLimitsMin = yDimesion[0];
  const yLimitsMax = yDimesion[1];
  const dimsArr = [];
  for (let i = 0; i < count; i++) {
    let { x, y } = getRandomDims(xLimitsMin, xLimitsMax, yLimitsMin, yLimitsMax, radius, dimsArr) as any;
    dimsArr.push({ x, y });
  }
  return dimsArr;
}


export const getResponsiveSizes = (
  isSmall: boolean,
  isMedium: boolean,
  isLarge: boolean,
  isExtraLarge: boolean) => {
  if (isSmall) {
    return ({
      width: 200,
      height: 1200,
      radius: 120
    })
  } else if (isMedium) {
    return ({
      width: 400,
      height: 1000,
      radius: 120
    })
  } else if (isLarge) {
    return ({
      width: 700,
      height: 800,
      radius: 110
    })
  } else if (isExtraLarge) {
    return ({
      width: 850,
      height: 800,
      radius: 110
    })
  } else {
    return ({
      width: 1000,
      height: 800,
      radius: 110
    })
  }
}