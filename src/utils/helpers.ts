export function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
    return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}
export function isValidDate(d: unknown) {
    return d instanceof Date && !isNaN(d as unknown as number);
}