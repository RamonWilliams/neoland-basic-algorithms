const number1 = 10;
const number2 = 20;
const number3 = 2;


if ((number2/number1)==2) {
    console.log("number2 dividido entre number1 es igual a 2");
  }
  //iteracion 5.1
  if ((number1!==number2)) {
    console.log("number1 es estrictamente distinto a number2");
  }
  //iteracion 5.2

  if ((number3 != number1)) {
    console.log("number3 es distinto number1");
  }
  //iteracion 5.3

  if ((number3*5==number1) ){
    console.log("number3 por 5 es igual a number1");
  }
  //Iteracion 5.4

  if (((number3*5)==number1) && ((number1*2)==number2)){
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }
  //Iteracion 5.5
 
  if ((number2/2==number1) || (number1/5)== number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }
//ITERACION 5.6

/*-------------------------------------------------------------------------- */
// Iteracion 6

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola
let y=9;
for(t=0; t<=y ;t++){
 console.log(t)
}

//Iteracion 6.1
/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/
for(w=0; w<10; w++){
    if(w%2===0){
        console.log(w)
    }
}
//Iteracion 6.2

/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.*/

for(r=0;r<10;r++){
    if(r<9){
        console.log("Estoy durmiendo ")

    }
    else {
       console.log("Dormido")           
    }
}
// Iteracion 6.3


/*---------------------------------------------------------------------------------------------------------------------*/

//Iteracion #4 Arrays 

//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0])
//Iteracion 4.1

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const pepe = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
pepe[1]="IRONMAN";
console.log(pepe[1]);
//Iteraccion 1.2

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avenger = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avenger.length)
//Iteracion 1.3

//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
 console.log(rickAndMortyCharacters);
 //Iteracion 1.4

 //TODAVIA NO
//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickCharacters.pop();
console.log(rickCharacters[0])
console.log(rickCharacters[4])
//Iteracion 1.5

// TODAVIA NO
//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const andMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
delete andMortyCharacters[2]
console.log(andMortyCharacters);
//Iteracio 1.6

//Iteración #3: Operadores
//1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

multiplicacion = 10*5;
console.log(multiplicacion);
//Iteracion ejercicio 3 - 1.1

//1.2 Divide 10 por 2 y muestra el resultado en un console.
division = 10/2;
console.log(division);
//Iteracion ejercicio 3- 1.2

//1.3 Muestra mediante un console el resto de dividir 15 por 9.
resto=15%9;
console.log(resto);
//Iteracion 1.3

//1.4 Usa el correcto operador de asignación que resultará en o = 15, 
//teniendo dos variables p = 10 y j = 5.
let p = 10, j = 5;
let o = p + j;
//Iteracion 1.4

//1.5 Usa el correcto operador de asignación que resultará en i = 50,
//teniendo dos variables c = 10 y m = 5.
let i = 50;
let c = 10 ,m = 5;
i=c*m;
//Iteracion 1.5









