// programa 07

let score = 88;

if (score >= 90 && score <= 100) {
    console.log('Conceito A');
}

else if (score >= 80 && score < 90) {
    console.log('Conceito B');
}

else if (score >= 70 && score < 80) {
    console.log('Conceito C');
}

else if (score >= 60 && score < 70) {
    console.log('Conceito D');
}

else if (score >= 50 && score < 60) {
    console.log('Conceito E');
}

else if (score >= 0 && score < 50) {
    console.log('Conceito F');
}

else {
    console.log('Nota inválida para conceitos!');
}
