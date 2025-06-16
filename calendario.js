document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('active');
  });
});
