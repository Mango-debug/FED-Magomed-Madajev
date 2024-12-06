let currentIndex = 0;
const items = document.querySelectorAll("section:nth-of-type(2) ul li");
const totalItems = items.length;

function showNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function showPreviousItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const offset = -100 * currentIndex;
    const ul = document.querySelector("section:nth-of-type(2) ul");
    ul.style.transform = `translateX(${offset}%)`;
}

// Automatically move to the next item every 3 seconds
setInterval(showNextItem, 3000);

// Add controls for navigation (optional)
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        showNextItem();
    } else if (e.key === "ArrowLeft") {
        showPreviousItem();
    }
});
