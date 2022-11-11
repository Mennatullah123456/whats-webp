// For Showing the fixed header with the white background
window.onscroll = () => {
    if (window.scrollY > 800) {
      // Make the bg white.
      document.querySelector(".header").classList.add("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
  };
  // Getting All items that will interact with the pricing table
  let month = document.querySelector(".price-toggler .month");
  let year = document.querySelector(".price-toggler .year");
  let monthAmount = document.querySelectorAll(".box-container .box .month");
  let yearAmount = document.querySelectorAll(".box-container .box .year");
  
  year.addEventListener("click", () => {
    year.classList.add("active");
    month.classList.remove("active");
  
    monthAmount.forEach((mo) => {
      mo.style.display = "none";
    });
    yearAmount.forEach((yr) => {
      yr.style.display = "block";
    });
  });
  month.addEventListener("click", () => {
    year.classList.remove("active");
    month.classList.add("active");
  
    monthAmount.forEach((mo) => {
      mo.style.display = "block";
    });
    yearAmount.forEach((yr) => {
      yr.style.display = "none";
    });
  });
  