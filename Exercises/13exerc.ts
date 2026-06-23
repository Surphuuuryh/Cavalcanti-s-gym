type resultdadiv = [quociente: number, resto: number];
const dividircomresto = (a: number, b: number): resultdadiv => {
    let c = b;
    let d = a % b;
    return [c, d];
}
const calcule: number[] = [20, 3];
const resultado: resultdadiv = dividircomresto(calcule[0], calcule[1]);
console.log(resultado);