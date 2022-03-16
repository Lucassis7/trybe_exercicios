// #01
let parent = document.getElementById('pai');
let newSection = document.createElement('section');
parent.appendChild(newSection);
newSection.id = 'irmaoDeElementoOndeVoceEsta';

// #02
let father = document.getElementById('elementoOndeVoceEsta');
let child = document.createElement('section');
father.appendChild(child);
child.id = 'filhoDoElementoOndeVoceEsta';

// #03 
let childOfChild = document.getElementById('elementoOndeVoceEsta').firstElementChild;
let children = document.createElement('section');
childOfChild.appendChild(children);
children.id = 'filhoDoPrimeiroFilhoDoFilho';

// #04
console.log(document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.nextElementSibling);