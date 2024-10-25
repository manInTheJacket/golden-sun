const DeleteUserContent = `
<main>
        <img
          src="./images/background-main.jpg"
          class="start_background_img"
          alt="Admin panel"
        />
        <div class="start_block">
          <h1 class="books_shop">Delete User</h1>
          <p>Delete the user in the system</p>
        </div>
        <section class="book_section">
            <form action="" method="get" class="contact-form">
                <h3 class="josefin fs-2 mb-1">Delete User By:</h3>
                <label>Selector:</label><br />

        <input
          checked
          type="radio"
          id="name"
          name="classType"
          value="name"
          required
        />
        <label for="kendo">name</label><br />

        <input
          type="radio"
          id="lastName"
          name="classType"
          value="lastName"
          required
        />
        <label for="iaido">lastName</label><br />

        <input
          type="radio"
          id="email"
          name="classType"
          value="email"
          required
        />
        <label for="iaido">email</label><br />
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

                <div style="margin: auto 0; margin-bottom: 20px; padding: 12px; border-radius: 6px; background-color: rgb(48, 48, 48);">
                    <div style="display: flex; align-items: center; text-align: center; margin-bottom: 10px;">
                        <input type="checkbox" name="Alisher" value="Alisher" style="margin-right: 10px;">
                        <p style="margin: auto 0;">Name: Alisher</p>
                    </div>
                    <div style="display: flex; align-items: center; text-align: center; margin-bottom: 10px;">
                        <input type="checkbox" name="Zhasulan" value="Zhasulan" style="margin-right: 10px;">
                        <p style="margin: auto 0;">Name: Zhasulan</p>
                    </div>
                    <div style="display: flex; align-items: center; text-align: center;">
                        <input type="checkbox" name="Ilyas" value="Ilyas" style="margin-right: 10px;">
                        <p style="margin: auto 0;">Name: Ilyas</p>
                    </div>
                </div>
                
                
                
                <button  type="submit" class="btn btn-primary" id="contact_submit">Submit</button>
              </form>
        </section>
        </main>
`
const deleteUser = document.getElementById('delete_user');
deleteUser.innerHTML = DeleteUserContent;