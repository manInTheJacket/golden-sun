const contactSubmit = document.getElementById('contact_submit');
const contactFormName = document.getElementById('contact_form_name');
const contactFormNameError = document.getElementById('contact_form_name_error');
const contactFormTel = document.getElementById('contact_form_tel');
const contactFormTelError = document.getElementById('contact_form_tel_error');
const contactFormEmail = document.getElementById('contact_form_email');
const contactFormEmailError = document.getElementById('contact_form_email_error');

contactSubmit.addEventListener('click', function(event) {
    event.preventDefault()
    if (validateName() && validatePhoneNumber() && validateEmail()) {

    }
        
    return alert('Form submitted successfully');
})

function validateName() {
    const inputValue = contactFormName.value
    if (inputValue === '') {
        showError(contactFormName, contactFormNameError, 'Please enter your name');
        return false
    } else {
        hideError(contactFormName, contactFormNameError);
        return true
    }
}

function validatePhoneNumber() {
    const inputValue = contactFormTel.value
    if (inputValue === '') { 
        showError(contactFormTel, contactFormTelError, 'Please enter a phone number');
        return false
    } else if(!inputValue.startsWith('+')) {
        showError(contactFormTel, contactFormTelError, 'Valid phone number should start with "+"');
        return false
    } else if (inputValue.length != 12) {
        showError(contactFormTel, contactFormTelError, 'Valid phone number should contain 11 digits');
        return false
    } else {
        hideError(contactFormTel, contactFormTelError);
        return true;
    }
}

function validateEmail() {
    const inputValue = contactFormEmail.value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (inputValue === '') {
        showError(contactFormEmail, contactFormEmailError, 'Please enter an email address');
        return false
    } else if (!emailRegex.test(inputValue.toLowerCase())) {
        showError(contactFormEmail, contactFormEmailError, 'Please enter a valid email address');
        return false
    } else {
        hideError(contactFormEmail, contactFormEmailError);
        return true;
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

contactFormTel.addEventListener('input', function(event) {
    validatePhoneNumber()
    if (validatePhoneNumber() && validateName() && validateEmail()) {
        contactSubmit.disabled = false
        contactSubmit.style.opacity = "1"
    } else {
        contactSubmit.disabled = true
        contactSubmit.style.opacity = "0.5"
    }
})

contactFormEmail.addEventListener('input', function(event) {
    validateEmail()
    if (validatePhoneNumber() && validateName() && validateEmail()) {
        contactSubmit.disabled = false
        contactSubmit.style.opacity = "1"
    } else {
        contactSubmit.disabled = true
        contactSubmit.style.opacity = "0.5"
    }
})

contactFormName.addEventListener('input', function(event) {
    validateName()
    if (validatePhoneNumber() && validateName() && validateEmail()) {
        contactSubmit.disabled = false
        contactSubmit.style.opacity = "1"
    } else {
        contactSubmit.disabled = true
        contactSubmit.style.opacity = "0.5"
    }
})