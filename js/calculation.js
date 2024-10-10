function addToBasket(title, price, imageURL) {
    // Define the item to add to the basket
    const item = {
      title: title,
      price: price,
      imageURL: imageURL,
      quantity: 1,
    };

    // Get the current basket from localStorage or initialize it
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    // Check if the item is already in the basket
    const existingItemIndex = basket.findIndex((basketItem) => basketItem.title === item.title);

    if (existingItemIndex !== -1) {
      // If the item exists, update the quantity
      basket[existingItemIndex].quantity += 1;
    } else {
      // Otherwise, add the new item to the basket
      basket.push(item);
    }

    // Save the updated basket back to localStorage
    localStorage.setItem('basket', JSON.stringify(basket));

    // Provide feedback to the user
    alert(`${item.title} has been added to your basket, quantity ${existingItemIndex === -1 ? 1 : basket[existingItemIndex].quantity}`);

    getTotalQuantity();
}