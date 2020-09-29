
//Arrow Functions

function somar(x, y){

    return x + y;       // -> método básico

}
console.log(somar(25, 60))


 let subtrair = (x, y) => x - y;

 console.log(subtrair(6, 4))


 let letrasNoNome = (nome) => {
    return nome.length
 }
 console.log(letrasNoNome('Beatriz'))


 //Operador Spread

 let numeros =[1, 2, 3, 4 ];

 let outros= [...numeros, 5, 6, 7, 8];

console.log(outros)

let info = {

    nome: 'beatriz',
    sobrenome:'souza',
    idade: 16

};

let novaInfo = {
    ...info,
    cidade: "ananindeua",
    estado: 'pará',
    país: 'brasil'

};

console.log(novaInfo);


function adicionarInfo(info){

    let novasInfo = { 
        ...info,
        status: 0,
        token: 'AFBKH1',
        data_cadastro: '12/12/2012',
    };

    return novasInfo;


}
console.log(adicionarInfo({nome: 'Valentina', sobrenome:'Enzo'}));

//Operador Rest


function adicionar(...number){ // ele faz que pegue os demais parametros 

    console.log(number)
}

adicionar(1,2,3,4)


//JUNTANDO O OPERADOR SPREAD E REST

function list(nomes, ...novosNomes){
   
    let novoConjunto = [

        ...nomes,
        ...novosNomes
    ]

    return novoConjunto
}

let nomes = ['katia', 'flavia'];

let outros = list(nomes, 'pedro', 'gaga');
  
console.log(outros);


//Includes e Repeat


let lista = ['ovo', 'café', 'arroz', 'feijão', 'carne'];

console.log(lista.includes('galinha')); // o includes retorna true ou false


console.log('x'.repeat(12)) // repeat retona x vezes o número desejado


//KEY, VALUES E ENTRIES EM ARRAY
let listaTelefonica =[852456, 7965, 7951563];

console.log(Object.keys(listaTelefonica))// keys 

let foods = ['pizza','batata frita', 'refrigerante'];

console.log(Object.values(foods)); //values

let animais = ['galinha', 'pato', 'vaca'];

console.log(Object.entries(animais));


// KEYS = EM OBJETOS RETORNA TODAS AS CHAVES DENTRO FO OBJ