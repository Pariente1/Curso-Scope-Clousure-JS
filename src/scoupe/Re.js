var firstName; //Undefined - Declaramos
firstName = 'Oscar'; //Asignamos
console.log(firstName); 

var lastName = 'David'; // Declaramos y asignamos al mismo tiempo.
lastName = 'Ana'; // Aqui estamos reasignando.
console.log(lastName) // Ana

var secondName = 'David';
var secondName = 'Claudia'; //Reasignamos
console.log(secondName); // Claudia

// let

let fruit = 'Apple' ; //Declarar y asignar
fruit = 'Kiwi'; //Reasignar. Con let se puede reasignar sin problema. 

/*let fruit = 'Banana'; Pero al querer redeclarar no es posible, incluso la aplicacion nos marca un error. */

// Const

const animal = "dog"; // declara y asigna
animal = "cat"; //reasignando
console.log(animal);

const vehiculos = [];
vehiculos.push("tsuru");
console.log(vehiculos);

vehiculos.pop();
console.log(vehiculos);


/* La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

Una variable declarada con var puede ser redeclarada y reasignada.
Una variable declarada con let puede ser reasignada, pero no redeclarada.
Una variable declarada con const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

Estructuras de datos declaradas con const
Las estructuras de datos, como los arrays u objetos, declaradas con const pueden cambiar las referencias de sus elementos, a este concepto se lo denomina mutabilidad. Sin embargo, siguen las mismas reglas ya mencionadas, no puedes redeclarar ni reasignar una variable de estructura de datos.

En React, una librería de JavaScript, puedes utilizar declaraciones con const para el estado de un componente, porque aunque cambie el valor, lo que sucede internamente es un re-renderizado y no una redeclaración. No te preocupes si no lo entiendes, pero tenlo presente cuando llegues a ese tema. */