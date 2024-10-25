const HTMLCode = `
<!-- Footer -->
    <div style="width: 100%;">
    <footer
      class="bg-white w-100 d-flex justify-content-center"
      style="color: black"
    >
      <div class="row g-3 m-0 container">
        <div class="col-4 d-none d-md-block align-self-center">
          <h2 class="josefin fw-bold">
            黄金の太陽 <br />
            GOLDEN SUN
          </h2>
        </div>
        <div class="col-6 col-md-4 align-self-center">
          <p>Developed by Abdigaliyev Z. , Shayakhmetov A. , Kenbay I.</p>
        </div>
        <div class="col-6 col-md-4">
          <p class="fw-bold">Contacts</p>
          <p>
            City: Astana <br />
            Address: Mangilik El, C1, Astana IT University <br />
            Phone number: +852 2504 8145
          </p>
        </div>
      </div>
    </footer>
    </div>
`
const footer = document.getElementById('footer');
footer.innerHTML = HTMLCode;