interface Produto {
    nome: string;
    preco: number;
    emEstoque: boolean;
}
let piracanjuba: Produto = {
    nome: "leite",
    preco: 4,
    emEstoque: false
}
let piranha: Produto = {
    nome: "piranha fish",
    preco: 12,
    emEstoque: true
}
let pacoca: Produto = {
    nome: "pacoca",
    preco: 0.5,
    emEstoque: true
}
function devoimprimir(...produtins: Produto[]): void {
    for (let i = 0; i < produtins.length; i++) {
        // amém q é igual C, grólia
        if (produtins[i].emEstoque) {
            console.log(produtins[i]);
        }
    }
}
devoimprimir(piracanjuba, piranha, pacoca);