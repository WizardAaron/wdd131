// Product array as specified
const products = [
    {
        id: "rf-4842",
        name: "refrigerator",
        avgRating: 4.5
    },
    {
        id: "to-4672",
        name: "toaster",
        avgRating: 4.7
    },
    {
        id: "mw-5923",
        name: "microwave",
        avgRating: 3.5
    },
    {
        id: "ov-9258",
        name: "oven",
        avgRating: 3.9
    },
    {
        id: "wm-0764",
        name: "washing machine",
        avgRating: 5.0
    }
];

// Function to populate product select options
function populateProductOptions() {
    const productSelect = document.querySelector('#product-name');
    
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
}

// Update footer with current year and last modified date
function updateFooter() {
    const year = document.querySelector("#year");
    const short = document.querySelector("#short");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (short) {
        short.textContent = document.lastModified;
    }
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateProductOptions();
    updateFooter();
});
