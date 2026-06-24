function areaRetangulo(largura: number, altura: number): number {
    return largura * altura;
}
const meuretangulo = {largura: 5, altura: 3};
console.log ("meu retangulo tem", meuretangulo.largura, "de largura e", meuretangulo.altura, "de altura, sua área é:", areaRetangulo(meuretangulo.largura, meuretangulo.altura));