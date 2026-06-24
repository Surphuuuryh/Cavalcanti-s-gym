const config = {tema: "escuro", maxItens: 10} as const;
// config.tema = "teletubbies";
// não pode mudar o valor do tema porque ela é uma propriedade readonly.
// a diferença entre o objeto config com e sem as const é que sem as const, as propriedades dentro dele não se tornam read-only, então o valor delas
// pode ser alterado, se tiver as const, as propriedades se tornam read-only e não podem mais ser alteradas.