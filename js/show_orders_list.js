const UsersItem = [
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
        name: 'Alex',
        tel: '+88053768536',
        email: 'anotherEmail@gmail.com',
        orders: [
            { name: 'Item 3', price: 20, amount: 3 }
        ]
    },
    {
        name: 'Zhambo',
        tel: '+88002343537',
        email: 'differentEmail@gmail.com',
        orders: [
            { name: 'Item 4', price: 5, amount: 5 },
            { name: 'Item 5', price: 8, amount: 4 }
        ]
    }
];

function createOrdersTable(users) {
    const table = document.createElement('table');
    table.className = 'table table-bordered';
    table.style = "color: white";
    const thead = document.createElement('thead');
    thead.className = 'thead-light';
    thead.innerHTML = `
        <tr>
            <th >Name</th>
            <th >Telephone</th>
            <th >Email</th>
            <th >Order Name</th>
            <th >Price</th>
            <th >Amount</th>
            <th >Total Price</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    users.forEach(user => {
        user.orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.tel}</td>
                <td>${user.email}</td>
                <td>${order.name}</td>
                <td>$${order.price}</td>
                <td>${order.amount}</td>
                <td>$${(order.amount * order.price).toFixed(2)}</td>
            `;
            tbody.appendChild(row);
        });
    });

    table.appendChild(tbody);

    document.getElementById('orders_box').appendChild(table);
}
createOrdersTable(UsersItem)