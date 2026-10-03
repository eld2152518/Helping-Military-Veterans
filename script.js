// External JavaScript file: shared behavior is loaded by every page.
document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  addCurrentYear();
  setupQuestionForm();
});

// A class selector is used here because the same mobile menu behavior is reused on every page.
function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function addCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

function setupQuestionForm() {
  const form = document.querySelector("#question-form");
  const status = document.querySelector("#form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Demo only: replace this message with your final submission instructions.";
    form.reset();
  });
}
