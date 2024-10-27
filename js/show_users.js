const ShowUsersContent = `
<img
src="./images/background-main.jpg"
class="start_background_img"
alt="Admin panel"
/>
<div class="start_block">
  <h1 class="books_shop">Show Users</h1>
  <p>Show All Users in the system</p>
</div>
<section class="book_section" id="users_box"></section>
`

const showUsersBox = document.getElementById('show_users');
showUsersBox.innerHTML = ShowUsersContent;
