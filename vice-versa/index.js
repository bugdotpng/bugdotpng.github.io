function menuToggle() {
  var toggle = document.getElementById("menu-toggle");
  toggle.classList.toggle("active");
  
  var dropdown = document.getElementById("menu-dropdown");
  dropdown.classList.toggle("active");
}