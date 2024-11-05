const htmlContent = `
<!-- Header and Navigation by Kenbay I. -->
<nav class="navbar w-100 d-flex navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <h1>
        <!-- h1 with the title -->
        黄金の太陽 <br />
        GOLDEN SUN
      </h1></a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#">
            Classes <i class="fa fa-chevron-down"></i
          ></a>
          <ul
            class="navbar-nav dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <li><a class="nav-link" href="kendo.html">Kendo</a></li>
            <li><a class="nav-link" href="iaido.html">Iaido</a></li>
            <li>
              <a class="nav-link" href="kenjutsu.html">Kenjutsu</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#">
            Our Shop <i class="fa fa-chevron-down"></i
          ></a>
          <ul
            class="navbar-nav dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <li class="nav-item sub-dropdown">
              <a class="nav-link" href="#">
                Japanese Swords <i class="fa fa-chevron-right"></i>
              </a>
              <ul
                class="navbar-nav sub-dropdown-content"
                aria-labelledby="navbarSubdropdown"
              >
                <li><a class="nav-link" href="katana.html">Katana</a></li>
                <li>
                  <a class="nav-link" href="wakizashi.html">Wakizashi</a>
                </li>
                <li>
                  <a class="nav-link" href="tanto.html">Tanto</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="shop_books.html">Book Shop</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
        <li class="nav-item-rel">
          <a class="nav-link" href="basket.html">Basket</a>
          <p class="score-number" id="score-number">0</p>
        </li>
        <li class="nav-item" id="current_user">
          <a class="nav-link" href="login.html">Log in</a>
        </li>
        <li class="nav-item" id="admin_panel">
        </li>
      </ul>
    </div>
  </div>
</nav>
`

const script = document.createElement("script");
script.src = "./js/showTotalQuantity.js";
document.body.appendChild(script);


const header = document.getElementById('header')
header.innerHTML = htmlContent

const current_user = JSON.parse(localStorage.getItem('current_user'))

if (current_user) {
  const userLink = document.querySelector('#current_user')
  userLink.innerHTML = `<a class="nav-link" href="">Log out</a>`
  userLink.addEventListener('click', () => {
    localStorage.removeItem('current_user')
    alert('You have logged out successfully.')
  })
}

if (current_user.email === "admin@gmail.com") {
  const userLink = document.querySelector('#admin_panel')
  userLink.innerHTML = `<a class="nav-link" href="./admin_panel.html">Admin Panel</a>`
}