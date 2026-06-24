function formatarMoeda(valor: number, moeda: string = "BRL"): string {
    let valorfixado = valor.toFixed(2);
    switch (moeda) {
        case "BRL":
            return 'R$ ' + valorfixado;
        case "USD":
            return '$ ' + valorfixado;
    }
    return 'R$ ' + valorfixado;
}
console.log(formatarMoeda(10, "USD"));