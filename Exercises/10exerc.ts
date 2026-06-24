type Predicado<T> = (item: T) => boolean;
const isapar: Predicado<number> = (a: number): boolean => {
    return a % 2 === 0;
}
function myfunc (valor: number[]): number[] {
    return valor.filter(isapar);
}
let piranhagem: number[] = [1, 2, 3, 4];
console.log(myfunc(piranhagem));