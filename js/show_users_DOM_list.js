// Retrieve users from localStorage
const getUsersFromLocalStorage = () => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
};

// Create users table HTML
const createUsersTable = (users) => {
    if (users.length === 0) return '<p>No users found.</p>';
    
    // Create table headers and rows
    const tableHeaders = `
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Tel</th>
            <th>E-mail</th>
            <th>Password</th>
        </tr>
    `;
    const tableRows = users.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.lastname}</td>
            <td>${user.tel}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
        </tr>
    `).join('');

    // Return complete table
    return `<table class="table table-bordered" style="color: white">${tableHeaders}${tableRows}</table>`;
};

// Display the table of users on the page
const displayUsersTable = () => {
    const users = getUsersFromLocalStorage();
    const usersBox = document.getElementById('users_box');
    usersBox.innerHTML = createUsersTable(users);
    console.log("Displayed users table:", users);
};

// Initialize display on page load
document.addEventListener('DOMContentLoaded', displayUsersTable);