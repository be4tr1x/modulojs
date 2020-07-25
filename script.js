//métodos de manipulação de Array

let listas = ['meias', 'camisas', 'sapatos', 'shorts'];

let res = listas.join("*"); // transforma numa string com uma separação por algum caractere
 
console.log(res);


/*
let school = [ 'caderno', 'lápis', 'borracha', 'caneta'];

let list = school.indexqOf('caneta'); //achar algum elemento na list

console.log(list);
*/


let number = ['1', '2','3','4'];

number[0] = '0'

number.pop()// remove a última coisa da lista 
 
/*number.shift() -> remove a primeira coisa da lista*/

number.push('5'); //adiciona mais um item no meu array;

let resp = number;

console.log(resp);



let receita  = ['ovos', 'trigo', 'manteiga', 'leite'];

/*
let receita2 = ['ovo', 'manteiga', 'frigideira']
delete receita[1]; -> //uns dos tipo para deletar um array

receita.splice(1, 2);   // função de remover um elemento da lista, a partir do elemento desejados
*/


/*let bolo = receita.concat(receita2);*/

let bolo = receita.sort(); // lista alfabetica
           receita.reverse();
console.log(bolo);


/*
let num = [45, 25, 60, 47];

let num2 = [];

num2 = num.map(function(item){
 
return item * 3 //map pode ser usado como uma "calculadora"

})

resultado = num2;

console.log(resultado);
*/

let num = [45, 21, 89, 12];

let num2 = [];

num2 = num.filter(function(item){  //filtrar os itens do meu array

    if(item > 30){

    return true;

    } else{

      return false;

    }

}); 

let resultado = num2;

console.log(resultado);


let calc = [78, 9, 65 , 19]

let cacl2 = []

cacl2 = calc.some(function(resu){
                                      // function every 
  return (resu > 50)? true : false

})


calc_r = cacl2;

console.log(calc_r);



let idade = [12, 16, 18, 20]

let anos = []

anos = idade.findIndex(function(dia){

  return (dia == 18)? true:false



})

die = anos;

console.log(die);





let pessoa = [

        {id: 1, nome: "Beatriz", sobrenome: "Souza"},
        {id: 2, nome: "Paulo", sobrenome: "Tobias"},
        {id: 3, nome: "Alinne", sobrenome: "Rodrigues"},

]


let procurar = pessoa.find(function(item){

  return (pessoa.id == 2)? true : false


})

let achar = pessoa;

console.log(achar)






//DATAS:

let d = new Date(); // ve o horario atual da data

d.setDate( d.getDate() + 5); //manipulações de datas

let novoValor = d;        

console.log(novoValor);

/*console.log(d.toDateString()); // algo mais resumido da data

console.log(d.toString()); // algo mais justificado da data*/

 /* se eu quiser pegar o mês usamos o: getMonth()
   usar o GET 
   se eu quiser pegar o dia usamos o: getDay();             
   obs: o resultado do dia é equivalente o dia da semana 
   o mês no js começar a contar do 0. ou seja, 0 a 11 meses*/


