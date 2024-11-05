const DeleteFormContent = `
<main>
    <img src="./images/background-main.jpg" class="start_background_img" alt="Admin panel" />
    <div class="start_block">
        <h1 class="books_shop">Delete User</h1>
        <p>Delete the user in the system</p>
    </div>
    <section class="book_section">
        <form action="" method="get" class="contact-form">
            <h3 class="josefin fs-2 mb-1">Delete User By:</h3>
            <label>Selector:</label><br />
            <input checked type="radio" id="name" name="classType" value="name" required />
            <label for="kendo">name</label><br />
            <input type="radio" id="lastname" name="classType" value="lastname" required />
            <label for="iaido">lastname</label><br />
            <input type="radio" id="email" name="classType" value="email" required />
            <label for="iaido">email</label><br />
            <div class="mb-2">
                <label for="name" class="form-label">Enter the value: </label>
                <input class="form-control w-100" placeholder="Enter Name" type="text" name="name" id="contact_form_name" />
                <p><small class="input-error" id="contact_form_name_error"></small></p>
            </div>
            <div class="user-checkbox-container" style="margin: auto 0; margin-bottom: 20px; padding: 12px; border-radius: 6px; background-color: rgb(48, 48, 48);"></div>
            <button type="submit" class="btn btn-primary" id="contact_submit">Delete</button>
        </form>
    </section>
</main>
`;

// Utility function to get users from localStorage
const getUsersFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
};

// Utility function to save users to localStorage
const saveUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
};

// Display matching users in the checkbox list
const displayUsersInCheckboxes = (users, filterType, searchValue) => {
    const userCheckboxContainer = document.querySelector('.user-checkbox-container');
    userCheckboxContainer.innerHTML = ''; // Clear previous content

    if (users.length === 0) {
        const message = document.createElement('p');
        message.innerText = `No users found with the given ${searchValue.length > 0 ? searchValue : 'criteria'}.`;
        userCheckboxContainer.appendChild(message);
    } else {
        // Create table element
        const table = document.createElement('table');
        table.classList.add('user-table');
        table.classList.add("table");
        table.classList.add("table-bordered");
        table.style.border= "white solid 1px";
        table.style.color="white";
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';

        // Create table header
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Select</th>
            <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">${filterType.charAt(0).toUpperCase() + filterType.slice(1)}</th>
        `;
        table.appendChild(headerRow);

        // Create a row for each user
        users.forEach(user => {
            const row = document.createElement('tr');

            // Checkbox cell
            const checkboxCell = document.createElement('td');
            checkboxCell.style.border = '1px solid #ddd';
            checkboxCell.style.padding = '8px';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = user.name;
            checkbox.value = user.name;
            checkboxCell.appendChild(checkbox);

            // User info cell
            const userInfoCell = document.createElement('td');
            userInfoCell.style.padding = '8px';
            userInfoCell.style.border = '1px solid #ddd';
            userInfoCell.innerText = user[filterType];

            // Append cells to row
            row.appendChild(checkboxCell);
            row.appendChild(userInfoCell);
            table.appendChild(row);
        });

        // Append table to container
        userCheckboxContainer.appendChild(table);
    }
};

// Search user based on radio selection and input field
const searchUser = () => {
    const filterType = document.querySelector('input[name="classType"]:checked').value;
    const searchValue = document.getElementById('contact_form_name').value.trim().toLowerCase();

    const users = getUsersFromLocalStorage();
    const filteredUsers = users.filter(user =>
        user[filterType].toLowerCase().includes(searchValue)
    );

    displayUsersInCheckboxes(filteredUsers, filterType, searchValue); // Pass filterType to the function
    updatePlaceholder(filterType); // Update placeholder based on selection
};

// Update the placeholder of the input based on selected radio button
const updatePlaceholder = (filterType) => {
    const inputField = document.getElementById('contact_form_name');
    if (filterType === 'name') {
        inputField.placeholder = 'Enter Name';
    } else if (filterType === 'lastname') {
        inputField.placeholder = 'Enter Last Name';
    } else if (filterType === 'email') {
        inputField.placeholder = 'Enter Email';
    }
};

// Delete selected users from localStorage
const deleteUser = () => {
    const users = getUsersFromLocalStorage();

    const selectedUsers = Array.from(document.querySelectorAll('.user-checkbox-container input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    const updatedUsers = users.filter(user => !selectedUsers.includes(user.name));

    saveUsersToLocalStorage(updatedUsers);
    displayToastNotification(
      "User successfully deleted!", 
      "fa fa-check", 
      "#27ae60", 
      "slide-in-slide-out"
    );
    searchUser(); // Refresh the displayed list after deletion
};

// Sort users based on selected radio button and display them
const sortUsers = () => {
    const sortType = document.querySelector('input[name="classType"]:checked').value;

    const users = getUsersFromLocalStorage();
    const sortedUsers = users.sort((a, b) => a[sortType].localeCompare(b[sortType]));

    displayUsersInCheckboxes(sortedUsers, sortType, ''); // Pass sortType to the function
};
// Function to set up the delete user form
const setupDeleteUserForm = () => {
  const deleteForm = document.getElementById('delete_user');
  deleteForm.innerHTML = DeleteFormContent; // Populate the form

  // Add event listeners after the form is populated
  document.getElementById('contact_submit').addEventListener('click', (e) => {
      e.preventDefault();
      deleteUser();
  });

  document.getElementById('contact_form_name').addEventListener('input', searchUser);
  document.querySelectorAll('input[name="classType"]').forEach(radio => {
      radio.addEventListener('change', () => {
          sortUsers();
          searchUser();
      });
  });

  // Initialize the user list
  sortUsers(); // Display sorted list initially
};

// Call setup function once DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupDeleteUserForm);
