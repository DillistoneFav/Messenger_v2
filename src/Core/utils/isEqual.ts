export const isEqual = (firstValue: unknown, secondValue: unknown): boolean => {
    return JSON.stringify(firstValue) === JSON.stringify(secondValue);
}
