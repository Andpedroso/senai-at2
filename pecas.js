const listaDePecas = ["Ar condicionado","Motor","Amortecedor",]

//console.log(listaDePecas)

if(listaDePecas.length<10){console.log("cadastro autorizado.")}
else{console.log("cadastro não autorizado, sem espaço.")}

var peso = 100;

if(peso>=100){console.log("cadastro autorizado.")}
else{console.log("cadastro não autorizado, peso menor que 100g.")}

let nomePeca = "pneu";

if(nomePeca.length>3){console.log("cadastro autorizado.")}
else if(nomePeca.length==0){console.log("cadastro não autorizado, nome vazio.")}
else{console.log("cadastro não autorizado, nome deve possuir mais de 3 caracteres.")}
