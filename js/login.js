const content = 
    `
    <section class="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
            <div class="josefin fs-3 fw-bold">
                黄金の太陽 <br />
                GOLDEN SUN
            </div>
            <h3 class="josefin">Log in</h3>
            <div class="mt-3 mw-400">
                <form action="" class="contact-form row row-cols-2 justify-content-center gy-2">
                    <div class="col-10 mt-0 p-0">
                        <input 
                            type="text" 
                            class="form-control"
                            placeholder="Email"
                            name="email"
                            id="login_email"
                        />
                        <p>
                            <small class="input-error" id="login_email_error"></small>
                        </p>
                    </div>
                    <div class="col-10 p-0">
                        <input 
                            type="password" 
                            class="form-control"
                            placeholder="Password"
                            name="password" 
                            id="login_password"
                        />
                        <p>
                            <small class="input-error" id="login_password_error"></small>
                        </p>
                    </div>
                    <button disabled type="submit" class="btn btn-primary btn-disabled mt-1" id="login_submit">Submit</button>
                </form>
                <div class="mt-3 p-0 text-center">Don't have an account? <a href="registration.html">Sign up</a></div>
            </div>
        </section>
    `

const loginContent = document.getElementById('login_content');
loginContent.innerHTML = content;

const loginSubmit = document.getElementById('login_submit');
const email = document.getElementById('login_email');
const emailError = document.getElementById('login_email_error');
const password = document.getElementById('login_password');
const passwordError = document.getElementById('login_password_error');

loginSubmit.addEventListener('click', function(event) {
    event.preventDefault()
    let users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(user => user.email === email.value)

    if(user) {
        if(user.password === password.value && user.email === "admin@gmail.com") {
            alert("Login successful as Administrator!")
            localStorage.setItem('current_user', JSON.stringify(user))
            return window.location.href = 'admin_panel.html'
        }
        if(user.password === password.value) {
            alert('Login successful');
            localStorage.setItem('current_user', JSON.stringify(user))
            return window.location.href = 'index.html'
        } else {
            return alert('Incorrect password')
        }
    } else {
        return alert('User not found')
    }

    return alert('Login successful');
})

function validateEmail() {
    const inputValue = email.value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (inputValue === '') {
        showError(email, emailError, 'Please enter your email address');
        return false
    } else if (!emailRegex.test(inputValue.toLowerCase())) {
        showErrorhowError(email, emailError, 'Please enter a valid email address');
        return false
    } else {
        hideError(email, emailError);
        return true
    }
}

function validatePassword() {
    const inputValue = password.value
    const passwordRegex = /^[a-zA-Z0-9].{7,}$/
    if (inputValue === '') {
        showError(password, passwordError ,'Please enter a password');
        return false
    } else if (!passwordRegex.test(inputValue)) {
        showError(password, passwordError,'Password must contain at least 8 characters, including uppercase letters, lowercase letters');
        return false
    } else {
        hideError(password, passwordError);
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

email.addEventListener('input', function(event) {
    validateEmail()
    if (validateEmail() && validatePassword()) {
        loginSubmit.disabled = false
        loginSubmit.style.opacity = "1"

    } else {
        loginSubmit.disabled = true
        loginSubmit.style.opacity = "0.5"
    }
})

password.addEventListener('input', function(event) {
    validatePassword()
    if (validateEmail() && validatePassword()) {
        loginSubmit.disabled = false
        loginSubmit.style.opacity = "1"

    } else {
        loginSubmit.disabled = true
        loginSubmit.style.opacity = "0.5"
    }
})