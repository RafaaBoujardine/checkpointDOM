const likeButtons = document.querySelectorAll(".like-btn");
const decrementButtons = document.querySelectorAll(".decrement");
const incrementButtons = document.querySelectorAll(".increment");
const removeButtons = document.querySelectorAll(".remove-btn");
const totalPriceElement = document.querySelector(".total-price");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked");
  });
});

decrementButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    }
  });
});

incrementButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  });
});

removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.remove();
    updateTotalPrice();
  });
});

function updateTotalPrice() {
  const itemPrices = document.querySelectorAll(".item span.price");
  let total = 0;
  itemPrices.forEach((itemPrice) => {
    const item = itemPrice.parentElement;
    const quantity = parseInt(item.querySelector(".quantity span").textContent);
    const price = parseInt(itemPrice.textContent.replace("$", ""));
    total += quantity * price;
  });
  totalPriceElement.textContent = `$${total}`;
}
