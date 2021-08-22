const cards = document.querySelectorAll("div.card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClassed();
    card.classList.add("card_active");
  });
});

function removeActiveClassed() {
  cards.forEach((card) => {
    card.classList.remove("card_active");
  });
}
