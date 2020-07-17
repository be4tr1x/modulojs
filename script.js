function menuToggle() {

let menuArea = document.getElementById("menu-area");
if( menuArea.classList.contains("menu-opened") == true){
    menuArea.classList.remove("menu-opened");
} else { menuArea.classList.add("menu-opened")}
};

let dia = 5;
let diaName = '';

switch (dia){  
     case 1:
        diaName = "Segunda-Feira";
     break;
case 2:
        diaName = 'Terça-Feira';
     break;
case 3:
         diaName = 'Quarta-Feira'
     break;
case 4:
    diaName = "Quinta-Feira";
    break;
case 5:
    diaName = "Sexta-Feira";
    break;
case 6: 
    diaName = "Sabado";
    break ;
    
case 7: 
    diaName = "Domingo";
    break ; 
 }

 document.getElementById("dia").innerHTML = "Hoje é:" +diaName;  
 
 let day = 4;
 let dayName = ""
 
 switch (day) {
    case 7: 
    case 6: 
        dayName = 'Final de Semana';
         
    break

     default:

        dayName = 'DIA DE SEMANA';
         break;
 }

 document.getElementById("day").innerHTML = "Hoje é:"+dayName;

  //FOR LOOP
  // FOR LOOP ARRAY
   
 let texto = ""
 
 /* for tem três etapas:

 1º) a criação da variavel
 2º) a condição
 3º) a incrementação */

  for(let i = 0; i <= 50; i++){
 
    texto = texto + i + "<br/>";
 

  };
/*
  let carros = [ 'HB20', '4X4', 'SIENA', 'UNO'];

  let html = '<ul>';

  for( let i in carros){

    html+= '<li>'+ carros[i]+'<li/>';

  }

  html+= '<ul/>'

  document.getElementById('demo').innerHTML = texto;
*/



