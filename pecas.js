//1 - Criar lista (array) para os nomes de peças.
const listaDePecas = ["Ar condicionado", "Motor", "Amortecedor",]
//console.log(listaDePecas)
//2 - Capacidade máxima de peças cadastradas é de 10 unidades.
if (listaDePecas.length < 10) { 
    console.log("cadastro autorizado.") 
}
else { 
    console.log("cadastro não autorizado, sem espaço na lista.") 
}
//3 - Peça deve possuir mais de 100 g para ser cadastrada.
var peso = 200;
if (peso > 100) { 
    console.log("cadastro autorizado.") 
}
else { 
    console.log("cadastro não autorizado, peso menor que 100g.") 
}
//4 - Verificar se a peça possui nome com mais de 3 caracteres e se é vazio.
let nomePeca = "Pneu";
if (nomePeca.length > 3) { 
    console.log("cadastro autorizado.") 
}
else if (nomePeca.length == 0) { 
    console.log("cadastro não autorizado, nome vazio.") 
}
else { 
    console.log("cadastro não autorizado, nome deve possuir mais de 3 caracteres.") 
}
// switch (nomePeca.length) {
//     case 0: console.log("cadastro não autorizado, nome vazio.")
//         break;
//     case 1: console.log("cadastro não autorizado, nome deve ter mais de 3 caracteres.")
//         break;
//     default: console.log("cadastro autorizado.")
//         break;
// }