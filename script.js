// Change between different pages
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
        window.scrollTo(0, 0);
    }
}


// Open "10 Things That Make You Special" popup
function openSpecial(title) {

    const modal = document.getElementById("specialModal");
    const titleElement = document.getElementById("specialTitle");

    titleElement.textContent = title;

    modal.classList.add("show");
}


// Close special popup
function closeSpecial() {

    const modal = document.getElementById("specialModal");

    modal.classList.remove("show");
}


// Open the letter
function openLetter() {

    showPage("letterContent");
}


// Close popup when clicking outside the box
document.addEventListener("click", function(event) {

    const modal = document.getElementById("specialModal");

    if (event.target === modal) {
        closeSpecial();
    }

});


// Press ESC to close popup
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeSpecial();
    }

});