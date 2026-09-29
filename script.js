```javascript
// =========================
// МОБИЛЬНОЕ МЕНЮ
// =========================

const menuButton =
    document.getElementById("menuButton");

const menu =
    document.querySelector(".menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});


// =========================
// КОРЗИНА
// =========================

let cart = [];

const cartButton =
    document.getElementById("cartButton");

const cartWindow =
    document.getElementById("cart");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");


// Открыть корзину

cartButton.addEventListener("click", () => {

    cartWindow.classList.add("active");

    showCart();

});


// Закрыть корзину

closeCart.addEventListener("click", () => {

    cartWindow.classList.remove("active");

});


// =========================
// ДОБАВЛЕНИЕ ТОВАРОВ
// =========================

const addButtons =
    document.querySelectorAll(".add-button");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const name =
            button.dataset.name;

        const price =
            Number(button.dataset.price);


        const product =
            cart.find(item => item.name === name);


        if (product) {

            product.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }


        updateCart();

        button.textContent = "✓";


        setTimeout(() => {

            button.textContent = "+";

        }, 700);

    });

});


// =========================
// ОБНОВЛЕНИЕ КОРЗИНЫ
// =========================

function updateCart() {

    let count = 0;

    let total = 0;


    cart.forEach(item => {

        count += item.quantity;

        total +=
            item.price * item.quantity;

    });


    cartCount.textContent = count;

    cartTotal.textContent =
        total.toLocaleString("ru-RU") + " ₸";


    showCart();

}


// =========================
// ПОКАЗАТЬ КОРЗИНУ
// =========================

function showCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty">
                Корзина пуста 🍕
            </p>
        `;

        cartTotal.textContent = "0 ₸";

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        const element =
            document.createElement("div");

        element.className = "cart-item";


        element.innerHTML = `

            <div>
                <strong>
                    ${item.name}
                </strong>

                <br>

                <small>
                    ${item.quantity} ×
                    ${item.price.toLocaleString("ru-RU")} ₸
                </small>
            </div>

            <button
                class="remove"
                data-index="${index}"
            >
                ×
            </button>

        `;


        cartItems.appendChild(element);

    });


    document
        .querySelectorAll(".remove")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart.splice(index, 1);

                updateCart();

            });

        });

}


// =========================
// ОФОРМЛЕНИЕ ЗАКАЗА
// =========================

const checkout =
    document.querySelector(".checkout");

checkout.addEventListener("click", () => {

    if (cart.length === 0) {

        alert(
            "Корзина пуста 🍕"
        );

        return;

    }


    alert(
        "Заказ принят! 🚀\n\n" +
        "Это пока демонстрационная версия сайта."
    );

});
```

