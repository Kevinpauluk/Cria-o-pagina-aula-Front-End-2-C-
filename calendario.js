const tbls = document.querySelectorAll('.calendar-display table');
const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    tbls.forEach((table, j) => {
      if (i === j) {
        table.classList.add('show');
      } else {
        table.classList.remove('show');
      }
    });
  });
});
