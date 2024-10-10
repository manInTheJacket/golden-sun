function getTotalQuantity() {
    let total = 0;
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    for (let i = 0; i < basket.length; i++) {
        total += basket[i].quantity; // Accumulate quantities
    }

    // Update the score number display
    const scoreNumberElement = document.getElementById('score-number');
    if (total !== 0) {
        scoreNumberElement.textContent = total; // Set the total quantity
        scoreNumberElement.classList.remove('hidden'); // Ensure the element is visible
    } else {
        scoreNumberElement.classList.add('hidden'); // Hide the element
    }
}

function getTotalPrice() {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    let totalAmount = 0;
    
    for (let i = 0; i < basket.length; i++) {
        totalAmount += basket[i].price * basket[i].quantity; // Price * Quantity
    }

    document.getElementById('totalPrice').innerHTML = "Total Price: $" + totalAmount.toFixed(2);
}

// Call the function to update the display
getTotalQuantity();