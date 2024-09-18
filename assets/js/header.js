// header menu========================
const mobileNav = document.querySelector(".mobileNavBtn");
const navHeader = document.querySelector("header");

const toggleNavbar = () => {
  navHeader.classList.toggle("active");
}

mobileNav.addEventListener("click",() => toggleNavbar());


// header come on top then it will fixed{}
window.onscroll = function() {
  stickyHeader();
};

var sticky = navHeader.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    navHeader.classList.add("sticky");
  } else {
    navHeader.classList.remove("sticky");
  }
}

// dom changes================================
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector(".videoProdcastLogo").style.display = "none";
  } else {
    document.querySelector(".videoProdcastLogo").style.display = "flex";

  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




// header dropdown

function show_hide() {
  var click = document.querySelector(".dropdown-content");
  if (click.style.display === "none") {
    document.querySelector(".dropdown-content").style.display = "block";
  } else if(click.style.display === "block"){
    document.querySelector(".dropdown-content").style.display = "none";
  } else{
    document.querySelector(".dropdown-content").style.display = "block";
  }
}