// #01
console.log(document.getElementById('elementoOndeVoceEsta'));

// #02
let parent = document.getElementById('elementoOndeVoceEsta').parentNode;
parent.style.background = 'green';

// #03
document.getElementById('primeiroFilhoDoFilho').innerText = 'Sabe o que foi? Cê sabe o que foi...';

// #04
console.log(document.getElementById('pai').firstElementChild);

// #05 
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// #06
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// #07
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// #08
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);