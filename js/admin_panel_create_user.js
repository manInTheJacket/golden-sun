const CreateUserContent = `
<main>
<img
  src="./images/background-main.jpg"
  class="start_background_img"
  alt="Admin panel"
/>
<div class="start_block">
  <h1 class="books_shop">Create User</h1>
  <p>Create new user in the system</p>
</div>
<section class="book_section">
    <form action="" method="get" class="contact-form">
        <h3 class="josefin fs-2 mb-1">Create new User</h3>
        <div class="mb-2">
          <label for="name" class="form-label">Enter your name: </label>
          <input
            class="form-control w-100"
            placeholder="Zhasulan"
            type="text"
            name="name"
            id="contact_form_name"
          />
          <p>
            <small class="input-error" id="contact_form_name_error"></small>
          </p>
        </div>
        <div class="mb-2">
            <label for="lastName" class="form-label">Enter your Last name: </label>
            <input
              class="form-control w-100"
              placeholder="Abdigaliyev"
              type="text"
              name="lastName"
              id="contact_form_lastName"
            />
            <p>
              <small class="input-error" id="contact_form_lastName_error"></small>
            </p>
        </div>
        <div class="mb-2">
          <label for="tel" class="form-label"
            >Enter your phone number:</label
          >
          <input
            class="form-control"
            placeholder="+77070007700"
            type="tel"
            name="tel"
            id="contact_form_tel"
          />
          <p>
            <small class="input-error" id="contact_form_tel_error"></small>
          </p>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Enter the email: </label>
          <input
            class="form-control"
            placeholder="230332@astanait.edu.kz"
            type="email"
            name="email"
            id="contact_form_email"
          />
          <p>
            <small class="input-error" id="contact_form_email_error"></small>
          </p>
        </div>
        <div class="mb-2">
            <label for="password" class="form-label">Create new password: </label>
            <input
              class="form-control w-100"
              placeholder="password"
              type="password"
              name="password"
              id="contact_form_password"
            />
            <p>
              <small class="input-error" id="contact_form_password_error"></small>
            </p>
        </div>
        <button disabled type="submit" class="btn btn-primary btn-disabled" id="contact_submit">Submit</button>
      </form>
</section>
</main>
`
const createUser = document.getElementById('create_user');
createUser.innerHTML = CreateUserContent;