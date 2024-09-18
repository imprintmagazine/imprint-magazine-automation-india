function showFullName(link, fullName) {
    link.textContent = fullName;
  }

  const arrowBtn = document.querySelector(".arrow-btn");
  const asideLinks = document.querySelector(".asideLinks");

  arrowBtn.addEventListener("click", () => {
    asideLinks.classList.toggle("active");
  });