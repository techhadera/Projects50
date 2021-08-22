const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const progressBar = document.getElementById("progressBar");
const digits = document.querySelectorAll(".digit");

let counter = 0;

btnNext.addEventListener("click", () => {
  if (counter < digits.length - 1) {
    counter++;
    updateState();
  }
});

btnPrev.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    updateState();
  }
});

function updateState() {
  progressBar.style.width = counter * (1 / (digits.length - 1)) * 100 + "%";

  for (let i = 0; i < digits.length; i++) {
    if (i <= counter) {
      digits[i].classList.add("digit_active");
    } else {
      digits[i].classList.remove("digit_active");
    }
  }

  if (counter === digits.length - 1) {
    btnNext.disabled = true;
  } else if (counter === 0) {
    btnNext.disabled = false;
    btnPrev.disabled = true;
  } else {
    btnNext.disabled = false;
    btnPrev.disabled = false;
  }
}
