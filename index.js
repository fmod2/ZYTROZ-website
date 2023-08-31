const toggleButton = document.getElementById('toggleButton');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
