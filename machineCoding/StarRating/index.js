let starsContainer = document.getElementById("starsContainer");
let star = document.querySelectorAll(".star");
let filled = 0;

starsContainer.addEventListener("click", function (e) {
    starClicked = e.target.dataset.index;
    filled = starClicked;

    for (let i = 0; i < starClicked; i++) {
        star[i].style.color = "yellow";
    }
    for (let i = filled; i < 5; i++) {
        star[i].style.color = "gray";
    }
    let ratingCount = document.getElementById("ratingCount");
    ratingCount.innerText = `Rating count : ${starClicked}`;
})


starsContainer.addEventListener("mouseover", function (e) {
    starHovered = e.target.dataset.index;

    for (let i = 0; i < starHovered; i++) {
        star[i].style.color = "yellow";
    }
    for (let i = starHovered; i < 5; i++) {
        star[i].style.color = "gray";
    }
})

starsContainer.addEventListener("mouseleave", function (e) {
    for (let i = 0; i < filled; i++) {
        star[i].style.color = "yellow";
    }
    for (let i = filled; i < 5; i++) {
        star[i].style.color = "gray";
    }
})

