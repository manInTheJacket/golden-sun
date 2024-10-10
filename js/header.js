const htmlContent = `
<!-- Header and Navigation by Kenday I. -->
    <header>
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
`
const header = document.getElementById('header');

header.innerHTML = htmlContent;