let count = 0;
const counterDisplay = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");

const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

decreaseBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

increaseBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    counterDisplay.textContent = count;
}
