let count = 0;
const counterDisplay = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");

const increaseBtn = document.getElementById("increase");

decreaseBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

increaseBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

function updateDisplay() {
    counterDisplay.textContent = count;
}
