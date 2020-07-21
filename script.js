let nome = 'Beatriz Souza';

let resultado = "";

if(nome.indexOf('Beatriz') > -1){  //método de string 1º

  resultado = ('achou')

} else{

resultado = ('fala se fodeu')

}

console.log(resultado);


let name = "Daenerys Targeryan";

let blood = name.substr(-10, 4);    //método de string 2º

console.log(blood);

//método de string 3º

//primeira função mostrada na aula
let frase = 'Como você, particulamente, faria para sair desse labirinto de sofrimento?';

let alasca = frase.replace("Como você, particulamente, faria para sair desse labirinto de sofrimento?", "o que me dá esperança?");


console.log("frase:", frase);
console.log( "alasca:", alasca);

//segunda função mostrada na aula
let personagem = "MULHER MARAVILHA";

let luta = personagem.toLowerCase();

console.log(luta);

/*
//terceira função mostrada na aula

let rainha = "Cersei";

let rugir = rainha.trim(); // função que impede espaços aleatorios: no input....

let rugir = rainha.concat(" Lannister"); // função que junta afnsjoafkl

let rugir = rainha.charAt(3); //seleciona o caracteris da string 
console.log(rugir);
*/



//método de numbers
/*
let n = 10;
let res = n.toString()  + 20; //faz o número ficar em literal

console.log(res);
*/

/*
let n = 10.456789

let res = n.toFixed(2); //escolha de números decimais 

console.log(res);*/

let n = "130";
let res  = parseInt(n) + 15;  //caso o numero estiver em string e com decimais, usar o código *parseFloat(x)*

console.log(res);


