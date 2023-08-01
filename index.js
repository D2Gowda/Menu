const facts = document.querySelectorAll(".fact");

facts.forEach(fact => {
  fact.addEventListener("click", () => {
    fact.classList.toggle("active");
  });
});