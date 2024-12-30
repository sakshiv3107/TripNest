// Get elements
const priceRange = document.getElementById("price-range");
const priceDisplay = document.getElementById("price-display");
const bookingForm = document.getElementById("booking-form");

// Update price display dynamically
priceRange.addEventListener("input", () => {
  priceDisplay.textContent = `$${priceRange.value}`;
});

// Handle form submission
bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values from the form
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;
  const price = document.getElementById("price-range").value;

  // Validate inputs
  if (!date || guests < 1) {
    alert("Please fill in all required fields.");
    return;
  }

  // Save data to localStorage
  localStorage.setItem("destination", destination);
  localStorage.setItem("date", date);
  localStorage.setItem("guests", guests);
  localStorage.setItem("price", price);

  // Redirect to thank you page
  window.location.href = "thankyou.html";
});
