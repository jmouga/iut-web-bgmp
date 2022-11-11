const addBtn = document.querySelector(".checkout-btn-quantity-add");

const removeBtn = document.querySelector(".checkout-btn-quantity-remove");

const output = document.querySelector(".checkout-btn-quantity-output");

let counter = 1;

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    output.textContent = ++counter;
})

removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (counter <= 1) return;
    output.textContent = --counter;
})