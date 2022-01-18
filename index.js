var supermarketlist = ['Leche', 'Carne', 'Vino', 'Papa', 'Lechuga', 'Pan', 'Agua', 'Gaseosa', 'Snacks', 'Palta', 'Huevos', 'Aceite', 'Sal', 'Vinagre', 'Atún'];

for (let i = 0; i < supermarketlist.length; i++) {
    console.log(supermarketlist[i]);
}

console.log('---------------------- \n');

console.log(`Primero tengo que comprar ${supermarketlist[0]}`);

console.log('---------------------- \n');

console.log(`Por último, tengo que comprar ${supermarketlist[14]}`);

console.log('---------------------- \n');

console.log('Tengo que comprar ' + supermarketlist.length + ' productos');

console.log('---------------------- \n');

let username = 'juliannarvaja';
let name = "Julian";
let age = 19;
let hobbies = ['Leer', ' Escribir', ' Bingewatching'];
let city = "Córdoba";
let student = true;

console.log(`Mi username es ${username}`)
console.log(`Mi nombre es ${name}`)
if (age < 18) {console.log(`Mi edad es ${age}` + "No cuenta con la edad necesaria para validar su cuenta");
}
else {console.log(`Mi edad es ${age}` + " - Cuenta con la edad necesaria para validar su cuenta");
}
console.log(`Mis hobbies son: ${hobbies}`)
console.log(`Tengo ` + hobbies.length + ` hobbies`)
if (student = true) {console.log(`Me encuentro estudiando`)}
console.log(`Soy de ${city}`)

