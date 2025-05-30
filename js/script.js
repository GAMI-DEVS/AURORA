document.getElementById('volunteerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Dados enviados com sucesso!');
});


    function filtrarFAQ() {
      const input = document.getElementById("pesquisa").value.toLowerCase();
      const perguntas = document.querySelectorAll(".faq-card");

      perguntas.forEach(card => {
        const texto = card.textContent.toLowerCase();
        card.style.display = texto.includes(input) ? "block" : "none";
      });
    }



    function filtrarLocal() {
      const input = document.getElementById("input-pesquisa").value.toLowerCase();
      const perguntas = document.querySelectorAll(".card-endereco");

      perguntas.forEach(card => {
        const texto = card.textContent.toLowerCase();
        card.style.display = texto.includes(input) ? "flex" : "none";
      });
    }


function toggleSideMenu() {
  const menu = document.getElementById('side-menu');
  const isOpen = menu.style.left === '0px';
  menu.style.left = isOpen ? '-250px' : '0px';
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById('side-menu');
  const button = document.getElementById('menu-button');

  if (menu.style.left === '0px' && !menu.contains(event.target) && !button.contains(event.target)) {
    menu.style.left = '-250px';
  }
});
