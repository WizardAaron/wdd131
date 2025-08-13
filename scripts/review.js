// Function to get URL parameters
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    const formData = {};
    
    for (const [key, value] of params) {
        if (key === 'features') {
            // Handle multiple checkbox values
            if (!formData[key]) {
                formData[key] = [];
            }
            formData[key].push(value);
        } else {
            formData[key] = value;
        }
    }
    
    return formData;
}

// Function to display review details
function displayReviewDetails() {
    const formData = getURLParams();
    const reviewContainer = document.querySelector('#review-details');
    
    if (reviewContainer && Object.keys(formData).length > 0) {
        let detailsHTML = '<ul>';
        
        if (formData['product-name']) {
            detailsHTML += `<li><strong>Product:</strong> ${formData['product-name']}</li>`;
        }
        
        if (formData.rating) {
            const stars = '☆'.repeat(parseInt(formData.rating));
            detailsHTML += `<li><strong>Rating:</strong> ${stars} (${formData.rating}/5)</li>`;
        }
        
        if (formData['install-date']) {
            const date = new Date(formData['install-date']);
            detailsHTML += `<li><strong>Installation Date:</strong> ${date.toLocaleDateString()}</li>`;
        }
        
        if (formData.features) {
            const features = Array.isArray(formData.features) ? formData.features : [formData.features];
            detailsHTML += `<li><strong>Useful Features:</strong> ${features.join(', ')}</li>`;
        }
        
        if (formData['written-review']) {
            detailsHTML += `<li><strong>Review:</strong> ${formData['written-review']}</li>`;
        }
        
        if (formData['user-name']) {
            detailsHTML += `<li><strong>Reviewer:</strong> ${formData['user-name']}</li>`;
        }
        
        detailsHTML += '</ul>';
        reviewContainer.innerHTML = detailsHTML;
    }
}

// Function to update and display review counter
function updateReviewCounter() {
    // Get current count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    
    // If no count exists, start at 0
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }
    
    // Increment the count
    reviewCount++;
    
    // Save the new count to localStorage
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display the count on the page
    const countElement = document.querySelector('#review-count');
    if (countElement) {
        countElement.textContent = reviewCount;
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
    displayReviewDetails();
    updateReviewCounter();
    updateFooter();
});
