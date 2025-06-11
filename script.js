// Exemplo básico de interatividade, caso precise
document.querySelectorAll('.article a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Aqui você pode colocar mais detalhes sobre a notícia!');
  });
});
