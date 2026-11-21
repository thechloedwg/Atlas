
const searchInput = document.getElementById("country-search");
const stampCards = document.querySelectorAll(".stamp-card");
const noResults = document.getElementById("no-results");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    stampCards.forEach(card => {
      const matches = card.textContent.toLowerCase().includes(query);
      card.hidden = !matches;

      if (matches) visibleCount++;
    });

    noResults.hidden = visibleCount !== 0;
  });
}
