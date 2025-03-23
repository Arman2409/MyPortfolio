export const debounce = <T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number
): (
    (this: ThisParameterType<T>, ...args: Parameters<T>) => void
) => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay) as unknown as ReturnType<typeof setTimeout>;
    };
};