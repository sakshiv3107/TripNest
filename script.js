// =========================
// Booking Page Logic
// =========================

// Get elements safely (only if they exist on this page)
const priceRange = document.getElementById("price-range");
const priceDisplay = document.getElementById("price-display");
const bookingForm = document.getElementById("booking-form");

if (priceRange && priceDisplay) {
  // Update price display dynamically
  priceDisplay.textContent = `$${priceRange.value}`;
  priceRange.addEventListener("input", () => {
    priceDisplay.textContent = `$${priceRange.value}`;
  });
}

if (bookingForm) {
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
}

// =========================
// Thank You Page Logic
// =========================
if (window.location.pathname.includes("thankyou.html")) {
  document.getElementById("destination-name").textContent =
    localStorage.getItem("destination") || "N/A";
  document.getElementById("booking-date").textContent =
    localStorage.getItem("date") || "N/A";
  document.getElementById("guest-count").textContent =
    localStorage.getItem("guests") || "N/A";
  document.getElementById("booking-price").textContent =
    `$${localStorage.getItem("price") || "0"}`;
}
