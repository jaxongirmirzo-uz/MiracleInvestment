let buttons = document.querySelectorAll(".section5__add");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let paragraph = btn.parentElement.nextElementSibling;
    if (btn.textContent == "+") {
      btn.textContent = "-";
      paragraph.classList.remove("hidden");
    } else {
      btn.textContent = "+";
      paragraph.classList.add("hidden");
    }
  });
});
