// MENU MOBILE
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// Fecha o menu ao clicar em uma opção
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});


// CARDÁPIO INTERATIVO
function showMenu(category, button) {

  // Esconde todos os cardápios
  document.querySelectorAll(".menu-list").forEach(menu => {
    menu.classList.remove("active");
  });

  // Remove destaque dos botões
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  // Mostra a categoria escolhida
  document.getElementById(category).classList.add("active");

  // Destaca o botão escolhido
  button.classList.add("active");
}


// FORMULÁRIO DE RESERVA
function makeReservation(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const people = document.getElementById("people").value;

  const message = document.getElementById("reservation-message");

  message.innerHTML =
    "✓ Obrigada, <strong>" + name + "</strong>! " +
    "Sua solicitação de reserva para <strong>" +
    people + "</strong>, no dia <strong>" +
    formatDate(date) + "</strong> às <strong>" +
    time + "</strong>, foi registrada.<br>" +
    "Esta é uma reserva demonstrativa.";

  event.target.reset();
}


// FORMATA DATA
function formatDate(date) {
  if (!date) return "";

  const parts = date.split("-");

  return parts[2] + "/" + parts[1] + "/" + parts[0];
}


// NÃO PERMITE DATA ANTERIOR A HOJE
const dateInput = document.getElementById("date");

if (dateInput) {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  dateInput.min = `${year}-${month}-${day}`;
}


// BOTÃO FLUTUANTE RESERVAR
function goToReservation() {
  document
    .getElementById("reserva")
    .scrollIntoView({
      behavior: "smooth"
    });
}


// INSTAGRAM DEMONSTRATIVO
function demoInstagram() {
  alert(
    "Brasa & Oliva 🍽️\n\n" +
    "Em um site real, este botão levaria para o Instagram do restaurante.\n\n" +
    "Projeto demonstrativo de portfólio."
  );
}
