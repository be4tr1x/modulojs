/*
let number = Math.floor(Math.random() * 100);
console.log(number);



let timer;

function comecar(){

 timer = setInterval(showTime, 1000);

}

function parar(){

 clearInterval(timer);

}

function showTime(){

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+ m+':'+ s;

  document.querySelector('.demo').innerHTML = txt;

}

function sorteio(){

    let number = Math.floor(Math.random() * 50,80, 90, 12,);
    document.querySelector(".number").innerHTML = number


}
  
//Template String

let nome = "Beatriz";
 
let idade = 16;

//let frase = "Meu nome é "+nome+", e ano que vem eu terei "+(idade +1)+ "anos"
let frase = `Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem eu terei ${idade + 1} anos` ;
console.log(frase)
*/
//Desconstrução de Objetos
let pessoa = {

    filme: 'Carol',
    atriz: 'Sarah Paulson',
    idade: 'não definido',
    social:{
        facebook: "Sarah",
        instagram: '@sarah',
        twitter:{
            url: "n3bul0s4",
            seguidores: 6000
        }

    },

    fichaTecnica:function() {

        return `${this.atriz} participou do filme ${this.filme}`;

    }

};

//let {filme, atriz, idade, social:{twitter:{url:twitter, seguidores}}} = pessoa;

//console.log(filme, atriz, idade, twitter, seguidores); 
 

let pessoas = {

 nome: 'Jessica',
 sobrenome: 'Lange',
 idade: 64,
 filmes: `etc, etc, etc`

}

function pegarNomeCompleto(obj){

    return `${obj.nome} ${obj.sobrenome} `

};

console.log(pegarNomeCompleto(pessoas));


//Descontruindo Arrays

let info = ['Beatriz Souza', 'Beatriz', 'Souza', '@be4tr1x'];

//let [nomeCompleto, nome, sobrenome, github] = info; //pegar todos os Arrays

let [nomeCompleto, ,, github ] = info;

console.log(nomeCompleto, github);


function criar (){

    let a = [1,2,3];
    return a


}

let numeros = criar();

let [a,b,c] = numeros;

console.log(a,b,c);