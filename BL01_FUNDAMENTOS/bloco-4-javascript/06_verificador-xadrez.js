// programa 06

let piece = 'DAMA';

switch(piece.toLowerCase()) {
    case 'rei':
        console.log('Move-se em todas as direções uma casa.');
        break;
    
    case 'dama':
        console.log('Move-se todas as direções, quantas casas estiverem disponíveis.');
        break;

    case 'torre':
        console.log('Move-se em linha reta, quantas casas estiverem disponíveis.');
        break;

    case 'bispo':
        console.log('Move-se na diagonal, quantas casas estiverem disponíveis.');
        break;
    
    case 'cavalo':
        console.log('Move-se em L, saltando sobre as peças, nas casas que estiverem disponíveis.');
        break;

    case 'peão':
        console.log('Move-se duas casas a frente, caso esteja na sua casa inicial ou então apenas uma casa a sua frente, se estas estiverem disponíveis, e ainda tem a sua captura apenas pelas diagonais imediatamente a frente.');
        break;

    default:
        console.log('Não é uma peça válida do xadrez!')
}