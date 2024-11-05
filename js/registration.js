const content = `
        <section class="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <div class="josefin fs-3 fw-bold">
                黄金の太陽 <br />
                GOLDEN SUN
            </div>
            <h3 class="josefin">Registration</h3>
            <div class="mt-3 mw-400">
                <form action="" class="contact-form row row-cols-2 justify-content-center gy-2">
                    <div class="col-10 mt-0 p-0">
                        <input 
                            type="text" 
                            class="form-control"
                            placeholder="Username"
                            name="username"
                            id="reg_username"
                        />
                        <p>
                            <small class="input-error" id="reg_username_error"></small>
                        </p>
                    </div>
                    <div class="col-5 mt-0 p-right">
                        <input 
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            name="name" 
                            id="reg_name"
                        />
                        <p>
                            <small class="input-error" id="reg_name_error"></small>
                        </p>
                    </div>
                    <div class="col-5 mt-0 p-left">
                        <input 
                            type="text"
                            class="form-control"
                            placeholder="Lastname"
                            name="lastname"
                            id="reg_lastname"
                        />
                        <p>
                            <small class="input-error" id="reg_lastname_error"></small>
                        </p>
                    </div>
                    <div class="col-10 p-0">
                        <input 
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            name="email"
                            id="reg_email"
                        />
                        <p>
                            <small class="input-error" id="reg_email_error"></small>
                        </p>
                    </div>
                    <div class="col-10 mt-0 p-0">
                        <input 
                            type="text" 
                            class="form-control"
                            placeholder="telephone"
                            name="tel"
                            id="reg_tel"
                        />
                        <p>
                            <small class="input-error" id="reg_tel_error"></small>
                        </p>
                    </div>
                    <div class="col-10 p-0">
                        <input 
                            type="password" 
                            class="form-control"
                            placeholder="Password"
                            name="password" 
                            id="reg_password"
                        />
                        <p>
                            <small class="input-error" id="reg_password_error"></small>
                        </p>
                    </div>
                    <div class="col-10 p-0">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Confirm Password"
                            name="confirm_password"
                            id="reg_confirm_password"
                        />
                        <p>
                            <small class="input-error" id="reg_confirm_password_error"></small>
                        </p>
                    </div>
                    <button disabled type="submit" class="btn btn-primary btn-disabled mt-3" id="reg_submit">Submit</button>
                </form>
                <div class="mt-3 p-0 text-center">Already have an account? <a href="login.html">Sign in</a></div>
            </div>
        </section>
        `

const registration = document.getElementById('registration_content')
registration.innerHTML = content

const regSubmit = document.getElementById('reg_submit')

const username = document.getElementById('reg_username')
const username_error = document.getElementById('reg_username_error')

const reg_name = document.getElementById('reg_name')
const name_error = document.getElementById('reg_name_error')

const lastname = document.getElementById('reg_lastname')
const lastname_error = document.getElementById('reg_lastname_error')

const email = document.getElementById('reg_email')
const email_error = document.getElementById('reg_email_error')

const tel = document.getElementById('reg_tel')
const tel_error = document.getElementById('reg_tel_error')

const password = document.getElementById('reg_password')
const password_error = document.getElementById('reg_password_error')

const confirmPassword = document.getElementById('reg_confirm_password')
const confirmPassword_error = document.getElementById('reg_confirm_password_error')

regSubmit.addEventListener('click', function(event) {
    event.preventDefault()
    let users = JSON.parse(localStorage.getItem('users')) || []
    const newUser = {
        id: Math.floor(Math.random() * 10000),
        username: username.value,
        name: reg_name.value,
        lastname: lastname.value,
        email: email.value,
        tel: tel.value,
        password: password.value
    }
    
    const isEqualEmail = users.some(user => user.email === newUser.email)

    if (!isEqualEmail) {
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))

        displayToastNotification(
            "Registration completed successfully!", 
            "fa fa-check", 
            "#27ae60", 
            "slide-in-slide-out"
        );
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 1500);
    } else {
        displayToastNotification(
            "Email already exists", 
            "fa fa-exclamation-triangle", 
            "#f39c12", 
            "slide-in-fade-out"
        );
    }
})

function validateEmail() {
    const inputValue = email.value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (inputValue === '') {
        showError(email, email_error, 'Please enter an email address')
        return false
    } else if (!emailRegex.test(inputValue.toLowerCase())) {
        showError(email, email_error, 'Please enter a valid email address')
        return false
    } else {
        hideError(email, email_error)
        return true
    }
}

function validateUsername() {
    const inputValue = username.value
    const usernameRegex = /^[a-zA-Z0-9._-]{4,}$/
    if (inputValue === '') {
        showError(username, username_error, 'Please enter a username')
        return false
    } else if(!usernameRegex.test(inputValue)) {
        showError(username, username_error, 'Username should be at least 4 characters long and contain only alphanumeric characters')
        return false
    } else {
        hideError(username, username_error)
        return true
    }
}

function validateName() {
    const inputValue = reg_name.value
    const nameRegex = /^[A-Z][a-zA-Z]+$/
    if (inputValue === '') {
        showError(reg_name, name_error, 'Please enter your name')
        return false
    } else if(!nameRegex.test(inputValue)) {
        showError(reg_name, name_error, 'Name should only contain Latin characters and start with an uppercase letter')
        return false
    } else {
        hideError(reg_name, name_error)
        return true
    }
}

function validateLastname() {
    const inputValue = lastname.value
    const lastnameRegex = /^[A-Z][a-zA-Z]+$/
    if (inputValue === '') {
        showError(lastname, lastname_error, 'Please enter your lastname')
        return false
    } else if(!lastnameRegex.test(inputValue)) {
        showError(lastname, lastname_error, 'Lastname should only contain Latin characters and start with an uppercase letter')
        return false
    } else {
        hideError(lastname, lastname_error)
        return true
    }
}

function validateEmail() {
    const inputValue = email.value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (inputValue === '') {
        showError(email, email_error, 'Please enter an email address')
        return false
    } else if (!emailRegex.test(inputValue.toLowerCase())) {
        showError(email, email_error, 'Please enter a valid email address')
        return false
    } else {
        hideError(email, email_error)
        return true
    }
}

function validateTel() {
    const inputValue = tel.value;

    if (inputValue === '') {
        showError(tel, tel_error, 'Please enter a phone number')
        return false
    } else if (inputValue.length !== 12 || inputValue[0] !== "+") {
        showError(tel, tel_error, 'Please enter a valid phone number')
        return false
    } else {
        hideError(tel, tel_error)
        return true
    }
}

function validatePassword() {
    const inputValue = password.value
    const passwordRegex = /^(?=.*[A-Z])[a-zA-Z0-9].{7,}$/

    if (inputValue === '') {
        showError(password, password_error, 'Please enter a password')
        return false
    } else if (!passwordRegex.test(inputValue)) {
        showError(password, password_error, 'Password must contain at least 8 characters, including uppercase letters, lowercase letters or numbers')
        return false
    } else {
        hideError(password, password_error)
        return true
    }
}

function validateConfirmPassword() {
    const inputValue = password.value
    const secondInputValue = confirmPassword.value
    if (secondInputValue === '') {
        showError(confirmPassword, confirmPassword_error, 'Please enter a password')
        return false
    } else if (inputValue!== secondInputValue) {
        showError(confirmPassword, confirmPassword_error, 'Passwords do not match')
        return false
    } else {
        hideError(confirmPassword, confirmPassword_error)
        return true
    }
}

function showError(inputElement, errorElement, errorMessage) {
    errorElement.style.display = 'block'
    inputElement.style.borderColor = 'red'
    errorElement.textContent = errorMessage
}

function hideError(inputElement, errorElement) {
    errorElement.style.display = 'none'
    inputElement.style.borderColor = 'transparent'
}

username.addEventListener('input', function(event) {
    validateUsername()
    if (validateUsername() && validateName() && validateLastname() && 
    validateEmail() && validateTel() && validatePassword()) {
        regSubmit.disabled = false
        regSubmit.style.opacity = "1"

    } else {
        regSubmit.disabled = true
        regSubmit.style.opacity = "0.5"
    }
})

reg_name.addEventListener('input', function(event) {
    validateName()
    if (validateUsername() && validateName() && validateLastname() && 
    validateEmail() && validateTel() && validatePassword()) {
        regSubmit.disabled = false
        regSubmit.style.opacity = "1"
    } else {
        regSubmit.disabled = true
        regSubmit.style.opacity = "0.5"
    }
})

lastname.addEventListener('input', function(event) {
    validateLastname()
    if (validateUsername() && validateName() && validateLastname() && 
    validateEmail() && validateTel() && validatePassword()) {
        regSubmit.disabled = false
        regSubmit.style.opacity = "1"
    } else {
        regSubmit.disabled = true
        regSubmit.style.opacity = "0.5"
    }
})

email.addEventListener('input', function(event) {
    validateEmail()
    if (validateUsername() && validateName() && validateLastname() && 
    validateEmail() && validateTel() && validatePassword()) {
        regSubmit.disabled = false
        regSubmit.style.opacity = "1"
    } else {
        regSubmit.disabled = true
        regSubmit.style.opacity = "0.5"
    }
})

tel.addEventListener('input', function(event) {
    validateTel()
    if (validateUsername() && validateName() && validateLastname() && 
    validateEmail() && validateTel() && validatePassword()) {
        regSubmit.disabled = false
        regSubmit.style.opacity = "1"
    } else {
        regSubmit.disabled = true
        regSubmit.style.opacity = "0.5"
    }
})

password.addEventListener('input', function(event) {
    validatePassword()
    if (validateUsername() && validateName() && validateLastname() && 
    validateEmail()&& validateTel() && validatePassword()) {
        regSubmit.disabled = false
        regSubmit.style.opacity = "1"
    } else {
        regSubmit.disabled = true
        regSubmit.style.opacity = "0.5"
    }
})

confirmPassword.addEventListener('input', function(event) {
    validateConfirmPassword()
    if (validateUsername() && validateName() && validateLastname() && 
    validateEmail() && validateTel() && validatePassword() && validateConfirmPassword()) {
        regSubmit.disabled = false
        regSubmit.style.opacity = "1"
    } else {
        regSubmit.disabled = true
        regSubmit.style.opacity = "0.5"
    }
})