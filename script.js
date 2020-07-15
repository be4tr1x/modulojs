
function alterar(titulo){
   
   
    document.getElementById("campo").value = titulo
     
}

alterar("");


function somar(x, y){

let total = x + y;

return total;
}

var resultado = somar(15, 25);

console.log(resultado);


function clicou(){

document.getElementById("title").innerHTML = "PROCESSANDO...";
alert("VOCÊ CLICOU!!");
}


function digitou(e){

 if (e.keyCode == 13 && e.ctrlKey== true ){

    let texto = document.getElementById("campo").value;

    console.log(texto);

 }


}


        function azul(){

        limpar();
        document.getElementById("paragrafo").classList.add('azul')
            
            }
    
        function red(){

        limpar()
        document.getElementById("paragrafo").classList.add('red')
        
        
        }
        
        function verde(){

        limpar()
        document.getElementById("paragrafo").classList.add('verde')
            
            
            }
            
         function limpar(){

         document.getElementById("paragrafo").classList.remove("azul");
         document.getElementById("paragrafo").classList.remove("red");
         document.getElementById("paragrafo").classList.remove("verde");

            }
                    
        function mostrarTelefone(elemento){

            elemento.style.display = "none";
            document.getElementById("telefone").style.display = "block";


        }


        let carros = [

            [ "maçã", "banana", "mamão"],
            [ 'pizza', 'fastfood', 'batata frita']

        ]
   
        console.log(carros)
        
        //objetos
       let carro = {

        nome:"Honda",
        marca: 'HB20',
        peso: '856kg',
        ligado: false,
        ligar:function(){
            this.ligado == true;
            console.log("vruumm vruuummm!");
        },
        acelerar:function(){

            if(this.ligado == true)  {  
            console.log('RRRIIIIIIHIHIH')
        } else{

            console.log(tihs.nome+ ""+ this.modelo+"não está ligado!");
        }
    }
  }
     carro.ligar();
     carro.acelerar();