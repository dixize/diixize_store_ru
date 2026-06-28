document.addEventListener("DOMContentLoaded", () => {
    // 1. Курсор
    const dot = document.querySelector(".custom-cursor-dot");
    document.addEventListener("mousemove", (e) => {
        dot.style.opacity = "1";
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
    });

    // 2. Логика калькулятора (ваша)
    const priceDisplay = document.getElementById("live-price-display");
    const tiles = document.querySelectorAll(".portfolio-item-card"); // Пример селектора
    let currentType = "service";
    const basePrices = { "service": 1500, "store": 3000 };

    function calculateTotal() {
        let total = basePrices[currentType] || 1500;
        priceDisplay.textContent = total;
    }

    // 3. Отправка формы (Netlify)
    const form = document.getElementById("portfolio-interactive-form");
    const submitBtn = document.getElementById("form-submit-trigger");

    form.addEventListener("submit", () => {
        submitBtn.classList.add("disabled");
        const spinner = submitBtn.querySelector(".spinner");
        if (spinner) spinner.classList.remove("hidden");
    });
});
