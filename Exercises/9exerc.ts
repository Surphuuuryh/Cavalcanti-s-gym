function calcularamedia(... notas: number[]): number {
    if (notas.length === 0) {
        return 0;
    }
    return (notas.reduce((acc, n) => acc + n, 0)) / (notas.length);
}
console.log (calcularamedia(1, 2, 3, 4));