const formBox = document.getElementById("form");
const divBox = document.getElementById("div");
const pBox = document.getElementById("p");


// Add event listeners
formBox.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Form is clicked");
})

divBox.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Div is clicked");
})

pBox.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("P is clicked");
})