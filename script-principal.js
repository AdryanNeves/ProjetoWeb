function setActiveLink(event) {
  const links = document.querySelectorAll('.menu a');
  links.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}
function redirectToPage() {
  window.location.href = "https://www.linkedin.com/in/adryan-daniel-0b11461aa";
}