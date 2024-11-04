const ShowOrdersContent = `
  <img
      src="./images/background-main.jpg"
      class="start_background_img"
      alt="Admin panel"
    />
    <div class="start_block">
      <h1 class="books_shop">Show Orders</h1>
      <p>Show All orders that users have bought</p>
    </div>
    <section class="book_section" id="orders_box"></section>
`;

// Set the innerHTML
const showOrders = document.getElementById('show_orders');
showOrders.innerHTML = ShowOrdersContent;

