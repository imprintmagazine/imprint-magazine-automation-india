// Select elements
const cookieBox = document.querySelector(".cookie-wrapper");
const acceptBtn = document.querySelector("#acceptBtn");
const declineBtn = document.querySelector("#declineBtn");

// Function to check if the cookie consent is already provided
const checkCookieConsent = () => {
  // Check if the cookie is already set
  if (!document.cookie.includes("cookieConsent=true")) {
    // Show the cookie banner if consent is not found
    cookieBox.classList.add("show");
  }
};

// Set a cookie with the correct syntax
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/"; // Setting path to "/" makes the cookie accessible across the whole site
};


acceptBtn.addEventListener("click", () => {
  setCookie("cookieConsent", "true", 30); 
  cookieBox.classList.remove("show");
});

// Decline cookies
declineBtn.addEventListener("click", () => {
  setCookie("cookieConsent", "false", 30);
  cookieBox.classList.remove("show");
});

// Show cookie banner after 2 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    checkCookieConsent();
  }, 2000);
});
