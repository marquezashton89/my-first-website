const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector("#main-menu");
if (menuToggle && mainMenu) {
menuToggle.addEventListener("click", () => {
const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
menuToggle.setAttribute("aria-expanded", String(!isExpanded));
mainMenu.classList.toggle("is-open", !isExpanded);

});
}
const highlightsToggle = document.querySelector("#highlights-toggle");
const highlightsSection = document.querySelector("#highlights");
if (highlightsToggle && highlightsSection) {
highlightsToggle.addEventListener("click", () => {
const isExpanded =
highlightsToggle.getAttribute("aria-expanded") === "true";
highlightsSection.hidden = isExpanded;
highlightsToggle.setAttribute("aria-expanded", String(!isExpanded));
highlightsToggle.textContent = isExpanded
  ? "Show Highlights"
  : "Hide Highlights";

});
}