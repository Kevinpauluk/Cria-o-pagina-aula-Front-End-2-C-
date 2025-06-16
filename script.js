document.addEventListener('DOMContentLoaded', () => {
  const readMoreLinks = document.querySelectorAll('.read-more');

  readMoreLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const article = link.closest('.article');
      const fullContent = article.querySelector('.full-article');

      if (fullContent.style.display === 'block') {
        fullContent.style.display = 'none';
        link.textContent = 'Leia mais';
      } else {
        fullContent.style.display = 'block';
        link.textContent = 'Mostrar menos';
      }
    });
  });
});
