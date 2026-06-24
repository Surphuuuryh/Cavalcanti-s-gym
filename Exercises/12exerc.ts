const precos: number[] = [10, 25, 3, 40, 7];
const precosdobrados: number[] = precos.map(paraguai => paraguai * 2);
console.log("Os preços dobrados são:", precosdobrados);
const precosfiltrados: number[] = precos.filter(argentina => argentina > 15);
console.log("Os preços acima de 15 são:", precosfiltrados);
const precossomados: number = precos.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Os preços somados são:", precossomados);