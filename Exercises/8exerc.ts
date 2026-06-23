function formatarMoeda(valor: number, moeda: string = "BRL"): string {
    let valorfixado = valor.toFixed(2);
    return 'R$ ' + valorfixado;
}
console.log(formatarMoeda(10, "BRL"));