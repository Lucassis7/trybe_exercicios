const elementoOndeVoceEstaSon = document.getElementById('segundoEUltimoFilhoDoFilho');

elementoOndeVoceEstaSon.remove();

const pai = document.getElementById('pai');
console.log(pai.childNodes);

for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
    const atual = pai.childNodes[i];
    if (atual.id !== 'elementoOndeVoceEsta') {
        atual.remove();
    }
}

console.log(pai.childNodes);
