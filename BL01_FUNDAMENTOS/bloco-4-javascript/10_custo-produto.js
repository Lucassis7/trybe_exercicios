// programa 10

const price = 15;
const priceSale = 18;

let totalCost = price * 1.2;
let profit = priceSale - totalCost;

if (price <= 0 || priceSale <= 0) {
    console.log('Valores inválidos para compra ou venda do produto!');
}

else {
    let totalProfit = profit * 1000;
    console.log('O valor do lucro após a venda de 1000 produtos foi de: R$', totalProfit);
}
