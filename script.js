const priceRange = document.getElementById("price-range");
const priceDisplay = document.getElementById("price-display");

// Update the price display dynamically
priceRange.addEventListener("input", () => {
  priceDisplay.textContent = `$${priceRange.value}`;
});

// Example script to save booking data
document.querySelector('.booking-form form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get values from the form
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;
    const price = document.getElementById('price-range').value;
  
    // Save to localStorage
    localStorage.setItem('destination', destination);
    localStorage.setItem('date', date);
    localStorage.setItem('guests', guests);
    localStorage.setItem('price', price);
  
    // Redirect to the thank you page
    window.location.href = 'thankyou.html';
  });
  

  // Get values from localStorage
const destination = localStorage.getItem('destination');
const date = localStorage.getItem('date');
const guests = localStorage.getItem('guests');
const price = localStorage.getItem('price');

// Update the page with the booking details
document.getElementById('destination-name').textContent = destination;
document.getElementById('booking-date').textContent = date;
document.getElementById('guest-count').textContent = guests;
document.getElementById('booking-price').textContent = `$${price}`;
