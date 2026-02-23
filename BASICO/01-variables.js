/*Para crear una variable e JavaScript podemos utilizar tres comandos como lo son VAR, LET y CONST. Cada una de estos comandos tienen funciones diferentes, las cuales seran explicadas en breve. */

//VAR

/*Para definir una variable utilizando el comando VAR debemos tener en cuenta que el nombre de esta debe ser descriptivo y siempre 
debe utilizar el "formato" lowerCamelCase lo que significa que la primera letra del nombre debe estar en minuscula y cada que se 
inicie una nueva palabra debe iniciar en mayuscula. 
*/

var helloWorld = "Hello World"

/*Como vimos en el ejemplo anterior definimos la variable helloWorld la cual dentro contiene el texto "Hello World". Ahora, quiero 
utilizar esta variable para que aparezca en la terminal, as que utilizare console.log pero con una variacion, la cual es llamar dentro 
de los parentesis del console.log esta variable*/

console.log(helloWorld)

/*El termino var quiere decir variable valga la redundancia, pero lo que quiere decir es que al momento de nosotros definir esta 
variable podemos volverla a utilizar, eso si, sin volver a colocar el comando var.*/

helloWorld = "Hola Mundo, soy e'pañol"
console.log(helloWorld)

/*Como vemos al momento de volver a ejecutar el archivo en la consola se muestran los dos valores definidos en helloWorld. Esto pasa porque el comando VAR fue el primer comando para definir variables dentro de JavaScript, pues como vemos podemos cambiar el valor de cualquier variable definida con este comando.*/