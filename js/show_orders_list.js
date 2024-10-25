
`
orders[] {
  name,
  email,
  tel,
  orders[] {
    name,
    price,
    amount
  }
}
`

const users = [
    {
        name: 'Qwerty',
        tel: '+88005553535',
        email: 'soCoolEMail@gmail.com',
        orders: [
            { name: 'Item 1', price: 10, amount: 2 },
            { name: 'Item 2', price: 15, amount: 1 }
        ]
    },
    {
        name: 'Asdf',
        tel: '+88005553536',
        email: 'anotherEmail@gmail.com',
        orders: [
            { name: 'Item 3', price: 20, amount: 3 }
        ]
    },
    {
        name: 'Zxcv',
        tel: '+88005553537',
        email: 'differentEmail@gmail.com',
        orders: [
            { name: 'Item 4', price: 5, amount: 5 },
            { name: 'Item 5', price: 8, amount: 4 }
        ]
    }
];


const createOrdersList = (orders) => {
    return orders.map(order => `
        <div>
            <h3>Name: ${order.name}, Tel: ${order.tel}, E-mail: ${order.email}</h3>
            <ul style="display: flex; flex-direction: column; row-gap: 10px">
                ${order.orders.map(orderParam => `
                    <li>
                        <h2>${orderParam.name}</h2>
                        <p>Price: $${orderParam.price}</p>
                        <p>Amount: ${orderParam.amount}</p>
                        <p>Total Price: $${(orderParam.amount * orderParam.price).toFixed(2)}</p>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
};

const ordersBox = document.getElementById('orders_box');
ordersBox.innerHTML = createOrdersList(users);