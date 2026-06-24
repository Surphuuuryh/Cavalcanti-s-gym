type resultdadiv = [quociente: number, resto: number];
const dividircomresto = (a: number, b: number): resultdadiv => {
    let c = a / b;
    let d = a % b;
    return [c, d];
}
const calcule: number[] = [20, 3];
const [e, g] = dividircomresto(calcule[0], calcule[1]);
console.log("Quociente:", e, "Resto:", g);