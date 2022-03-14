// mostrando mensagem para cada item do objeto

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (person in names) {
    console.log('Olá,', names[person])
}

console.log('------------------')

// mostrando chaves e valores 

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (motors in car) {
    console.log(motors + ':', car[motors]);
}