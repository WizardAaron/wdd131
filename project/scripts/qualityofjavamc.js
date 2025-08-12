// Navigation menu functionality
const hamButton = document.querySelector("#menu");
const pages = document.querySelector(".pages");

hamButton.addEventListener("click", () => {
	pages.classList.toggle("open");
	hamButton.classList.toggle("open");
});

// Update footer with current year and last modified date
const year = document.querySelector("#year");
const short = document.querySelector("#short");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (short) {
    short.textContent = document.lastModified;
}
