function startPaymentProcess() {
    const button = document.getElementById('payButton');

    button.classList.add('processing');
    button.innerHTML = 'Processing... <span class="spinner"><i class="ri-loader-4-line ri-spin"></i></span>';
    button.classList.add('disabled'); 

    setTimeout(function() {
      window.location.href = 'payment_completed.html';
    }, 3000);
  }