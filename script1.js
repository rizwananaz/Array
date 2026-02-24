// Array of products
const products = [
    {
        name: "Laptop",
        price: "$999",
        description: "High performance laptop with 16GB RAM and 512GB SSD.",
        image: "https://via.placeholder.com/200x150?text=Laptop" // Placeholder image URL
    },
    {
        name: "Smartphone",
        price: "$499",
        description: "Latest smartphone with 6.5-inch display and 128GB storage.",
        image: "https://via.placeholder.com/200x150?text=Smartphone" // Placeholder image URL
    },
    {
        name: "Headphones",
        price: "$149",
        description: "Noise-cancelling over-ear headphones with Bluetooth.",
        image: "https://via.placeholder.com/200x150?text=Headphones" // Placeholder image URL
    },
    {
        name: "Smartwatch",
        price: "$199",
        description: "Fitness smartwatch with heart rate monitoring and GPS.",
        image:"https://via.placeholder.com/200x150?text=Smartwatch" // Placeholder image URL
    }
];

// Function to render the products dynamically
function renderProducts() {
    const productList = document.getElementById("product-list");

    // Loop through the array and create HTML for each product
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        `;

        // Append each product card to the product list
        productList.appendChild(productCard);
    });
}

// Call the function to render products when the page loads
renderProducts();