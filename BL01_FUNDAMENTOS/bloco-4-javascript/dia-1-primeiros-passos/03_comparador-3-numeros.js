// programa 03

const numA = 8;
const numB = 9;
const numC = 9;

if (numA > numB && numA > numC) {
    console.log('O número', numA, 'é o maior número de todos!');
}

else if (numB > numA && numB > numC) {
    console.log('O número', numB, 'é o maior número de todos!');
}

else if (numC > numA && numC > numB) {
    console.log('O número', numC, 'é o maior número de todos!');
}

else {
    console.log('Os números são iguais!')
}