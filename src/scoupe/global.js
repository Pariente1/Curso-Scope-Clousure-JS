// variables

var a; // declarando

//Lo comun es que se declare y se asigne al mismo tiempo. 

var b = 'b'; // declaramos y asignamos

b = 'bb'; // aqui estamos reasignando 
var a = 'aa'; // aqui estamos redeclarando

// Global scope
var fruit = 'apple'; // esta variable esta declarada y asignada en un Global Scope.

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; // Le estamos asignando un valor que no ah sido declarado previamente. Sin embargo esta declarado como una Global scope ya que no fué asignada con LET,VAR ni CONST. 
    console.log(country);
}

countries();
console.log(country);
