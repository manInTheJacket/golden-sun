// Retrieve users from localStorage
const getUsersFromLocalStorage = () => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
};

// Create users list HTML
const createUsersList = (users) => {
    return users.map(user => `
        <div>
            <p>Name: ${user.name}</p>
            <p>Last Name: ${user.lastName}</p>
            <p>Tel: ${user.tel}</p>
            <p>E-mail: ${user.email}</p>
            <p>Password: ${user.password}</p>
            <p>First log-in: ${user.firstLogIn}</p>
            <p>Last log-in: ${user.lastLogIn}</p>
        </div>
        <br /><br />
    `).join('');
};

// Display the list of users on the page
const displayUsersList = () => {
    const users = getUsersFromLocalStorage();
    const usersBox = document.getElementById('users_box');
    usersBox.innerHTML = createUsersList(users);
    console.log("Displayed users list:", users);
};

// Initialize display on page load
document.addEventListener('DOMContentLoaded', displayUsersList);
