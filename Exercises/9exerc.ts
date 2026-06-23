function calcularamedia(... notas: number[]): number {
    return (notas.reduce((acc, n) => acc + n, 0)) / (notas.length);
}
console.log (calcularamedia(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15))