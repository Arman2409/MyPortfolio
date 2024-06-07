const scrollListener = (
    currentPoints: number[],
    setChosenPoint: Function
) => {
    const scrolledY = window.scrollY;

    // Set the chosen point
    currentPoints.forEach((point: number, index: number) => {
        const nextPoint = currentPoints[index + 1];
        if (point < scrolledY && (!nextPoint || nextPoint > scrolledY)) {
            setChosenPoint(point);
        }
    })
}

export default scrollListener;