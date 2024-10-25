const users = [
    {
        name: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        tel: "123-456-7890",
        password: "password123",
        firstLogIn: "2023-01-01",
        lastLogIn: "2024-10-25"
    },
    {
        name: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        tel: "987-654-3210",
        password: "password456",
        firstLogIn: "2023-02-01",
        lastLogIn: "2024-10-24"
    },
    {
        name: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        tel: "456-789-1234",
        password: "password789",
        firstLogIn: "2023-03-01",
        lastLogIn: "2024-10-23"
    }
];

`
users[] {
  name,
  lastName,
  email,
  tel,
  password,
  firstLogIn,
  LastLogIn
}
`

const createUsersList = (users) => {
    return users.map(user => `
        <div>
            <p>Name: ${user.name}</p>
            <p>Last Name: ${user.lastName}</p>
            <p>tel: ${user.tel}</p>
            <p>E-mail: ${user.email}</p>
            <p>Password: ${user.password}</p>
            <p>First log-in: ${user.firstLogIn}</p>
            <p>Last log-in: ${user.lastLogIn}</p>
        </div>
        <br />
        <br />
    `).join('');
};

const usersBox = document.getElementById('users_box');
usersBox.innerHTML = createUsersList(users);