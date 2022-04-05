const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const nameContact = order.order.delivery.deliveryPerson;
  const nameDelivery = order.name;
  const telDelivery = order.phoneNumber;
  const addressDelivery = order.address.street;
  const numberAddressDelivery = order.address.number;
  const apartmentDelivery = order.address.apartment;
  console.log(`Olá, ${nameContact}, entrega para: ${nameDelivery}, tel: ${telDelivery}, R. ${addressDelivery}, nº ${numberAddressDelivery}, apto: ${apartmentDelivery}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let nameContact = order.name; 
  nameContact = 'Luiz Silva';
  let priceTotal = order.payment.total;
  priceTotal = 50;
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  console.log(`Olá, ${nameContact}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${priceTotal},00`);
}

orderModifier(order);
