const tbls = document.querySelectorAll('.table-content table');
document.querySelectorAll('.toggle-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    tbls.forEach((t,j) => {
      t.classList.toggle('show', j === i);
    });
  });
});
