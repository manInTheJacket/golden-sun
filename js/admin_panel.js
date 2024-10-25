const adminContent = `
    <main>
      <img
        src="./images/background-main.jpg"
        class="start_background_img"
        alt="Shop Books"
      />
      <div class="start_block">
        <h1 class="books_shop">Admin Panel</h1>
        <p>Here you can control over your website</p>
      </div>
      <section class="book_section">
        <div class="admin">
          <div class="admin_item">
            <button type="button" class="btn btn-danger">Delete User</button>
          </div>
          <div class="admin_item">
            <button type="button" class="btn btn-success">Create User</button>
          </div>
          <div class="admin_item">
            <button type="button" class="btn btn-primary">Show Orders</button>
          </div>
          <div class="admin_item">
            <button type="button" class="btn btn-warning">Show Users</button>
          </div>
        </div>
      </section>
    </main>
`
const admin = document.getElementById('admin');
admin.innerHTML = adminContent;