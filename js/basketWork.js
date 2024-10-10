// Function to render basket items from localStorage
function renderBasket() {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const ul = document.querySelector('.book_section ul');
    ul.innerHTML = ''; // Clear any existing content

    // Loop over each item in the basket
    basket.forEach((item, index) => {
      const totalCost = (item.price * item.quantity).toFixed(2); // Calculate total cost

      // Create a new li element
      const li = document.createElement('li');
      li.classList.add('li-elem-basket');

      // Set the inner HTML for each item
      li.innerHTML = `
        <div>
          <h2>${item.title}</h2>
          <p>Price: ${item.price}$</p>
          <p>Amount: ${item.quantity}</p>
          <p>Total cost: ${totalCost}$</p>
          <button type="button" class="btn btn-success" onclick="updateQuantity(${index}, 1)">Add 1</button>
          <button type="button" class="btn btn-danger" onclick="updateQuantity(${index}, -1)">Remove 1</button>
        </div>
        <img src="${item.imageURL}" style="object-fit: cover" width="150" height="200" />
      `;

      // Append the li element to the ul
      ul.appendChild(li);
    });
}

// Function to update quantity in the basket (add or remove items)
function updateQuantity(index, change) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    // Update the quantity based on the change
    basket[index].quantity += change;

    // Remove the item if the quantity is less than or equal to 0
    if (basket[index].quantity <= 0) {
      basket.splice(index, 1);
    }

    // Update the basket in localStorage
    localStorage.setItem('basket', JSON.stringify(basket));

    // Re-render the basket
    renderBasket();
    getTotalQuantity();
    getTotalPrice();
}

// Initial render when the page loads
document.addEventListener('DOMContentLoaded', renderBasket);