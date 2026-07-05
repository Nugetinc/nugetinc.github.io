const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!reduceMotion) {
  document.querySelectorAll(".project").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--mx", "86%");
      card.style.setProperty("--my", "18%");
    });
  });
}
