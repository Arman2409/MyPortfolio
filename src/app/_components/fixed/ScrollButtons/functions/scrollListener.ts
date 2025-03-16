const scrollListener = (
    currentPoints: number[],
    setChosenPoint: (point: number) => void,
) => {
    const scrolledY = window.scrollY;

    // Set the chosen point
    currentPoints.forEach((
        point: number, 
        index: number) => {
        const nextPoint = currentPoints[index + 1];

        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 25){
            setChosenPoint(currentPoints[currentPoints.length - 1]);
            return;
        }
        if (point < scrolledY && (!nextPoint || nextPoint > scrolledY)) {
            setChosenPoint(point)
        }
    })
}

export default scrollListener;