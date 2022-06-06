// antes de ES6
function newFuntion(name, age, country){
    var name = name || 'Diego';
    var age = age || 32;
    var country = country || 'CR'
    console.log(name, age, country);
}

//ES6
function newFuntion2(name = 'Diego', age=24, country= "CR"){
    console.log(name, age, country);
}

newFuntion2();
newFuntion2('Osar', '32', 'COL')

let hello = "hello";
let world = "world";
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);


let lorem = "hola mundo quiero separa esta frase de lo demas para que sea epica. \n"
 + "otra frase epica que ocupamos."


 //ES6
 let lorem2 = `Otra frase epica que necesitamos
 ahora es otra frase diferente pero epica.`;

 console.log(lorem);
 console.log(lorem2);


 let person = {
     'name': 'Diego',
     'age': 24,
     'country': 'CR'
 }
 console.log(person.name, person.age);

 
 let { name, age, country } = person;
 console.log(name, age);


 let team1 = ['oscar', 'Diego', 'mario'];
 let team2 = ['Maria', 'Camila', 'Melany'];

 let education = ['David', ...team1, ...team2];

 console.log(education);


{
    var globalVar = "global var";
}
{
    let globalLet = "global let";
    //para acededer es solo en el mismo codigo
    console.log(globalLet);
}
//var se puede llamar globalmente
console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a); 