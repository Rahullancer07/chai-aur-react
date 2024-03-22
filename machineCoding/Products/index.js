const container = document.getElementById("container");

let data = [];
fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((res) => res.forEach((item) => {
    const productCard = document.createElement('div');
    const ratingStars = document.createElement('div');
    ratingStars.setAttribute("class", "rating_stars");

    const filledStars = Math.round(item.rating.rate, 0);
    const unfilledStars = 5 - filledStars;

    for (let i = 0; i < filledStars; i++) {
        const filledStar = document.createElement("span");
        filledStar.setAttribute("class", "filled_star");
        filledStar.innerHTML = "&#9733";
        ratingStars.appendChild(filledStar);
    }

    for (let i = 0; i < unfilledStars; i++) {
        const unfilledStar = document.createElement("span");
        unfilledStar.setAttribute("class", "unfilled_star");
        unfilledStar.innerHTML = "&#9734";
        ratingStars.appendChild(unfilledStar);
    }

    productCard.setAttribute("class", "productCard")
    productCard.innerHTML += ` <img
        id="productImage"
        src=${item.image}
        alt="productImage"
    />
    <span id="productName">
        ${item.title}
    </span>
    <p id="productPrice">${item.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'INR',
    })}</p>
    <div class="rating">
        <div class="rating_stars">
            ${ratingStars.innerHTML}
        </div>
        <span class="ratingCount">Count : 120</span>
    </div>
    <button class="buyButton">Buy Now</button>`;

    container.appendChild(productCard);
}))
    .catch((error) => {
        console.error("Error fetching data:", error);
    });;


