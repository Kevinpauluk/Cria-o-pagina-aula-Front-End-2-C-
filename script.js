const feedUrl = 'https://www.formula1.com/en/latest.rss'; // RSS da Fórmula 1
const container = document.getElementById('news-container');

async function loadRSS() {
  try {
    const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`);
    const data = await res.json();
    const xmlText = data.contents;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const items = xmlDoc.querySelectorAll("item");

    container.innerHTML = ''; // limpa o "Carregando..."

    if (items.length === 0) {
      container.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
      return;
    }

    items.forEach(item => {
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const description = item.querySelector("description") ? item.querySelector("description").textContent : 'Sem descrição disponível.';
      const pubDate = item.querySelector("pubDate").textContent;

      const div = document.createElement('div');
      div.className = 'article';
      div.innerHTML = `
        <h2><a href="${link}" target="_blank">${title}</a></h2>
        <p>${description}</p>
        <small>${new Date(pubDate).toLocaleString()}</small>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    container.innerHTML = `<p>Erro ao carregar notícias: ${err.message}</p>`;
  }
}

// Carregar notícias ao abrir
loadRSS();

// Atualiza a cada 5 minutos
setInterval(loadRSS, 5 * 60 * 1000);