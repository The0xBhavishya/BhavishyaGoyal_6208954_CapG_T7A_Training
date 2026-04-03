interface Product {
    name: string;
    price: number;
}

function addToCart(name: string, price: number): void {

    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart");
}

function displayCart(): void {

    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    let cartDiv = document.getElementById("cartItems");

    if (cartDiv) {
        cartDiv.innerHTML = "";

        cart.forEach((item, index) => {
            cartDiv.innerHTML += `
                <p>${item.name} - ₹${item.price}</p>
            `;
        });
    }
}