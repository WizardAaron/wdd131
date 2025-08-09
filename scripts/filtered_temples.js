const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "Redlands California",
	location: "Redlands, United States",
	dedicated: "2003, September, 14",
	area: 17300,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/redlands-california-temple/redlands-california-temple-37504-main.jpg"
  },
  {
	templeName: "Kona Hawaii",
	location: "Kona, United States",
	dedicated: "2000, January, 23",
	area: 12325,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-40578-main.jpg"
  },
  {
	templeName: "Durban South Africa",
	location: "Umhlanga, South Africa",
	dedicated: "2020, February, 16",
	area: 19860,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
  }
];

// Function to create temple cards
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    
    return card;
}

// Function to display all temples
function displayTemples(templesToShow) {
    const container = document.querySelector('#temple-container');
    if (container) {
        container.innerHTML = ''; // Clear existing content
        templesToShow.forEach(temple => {
            const templeCard = createTempleCard(temple);
            container.appendChild(templeCard);
        });
    }
}

// Display all temples when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayTemples(temples);
    
    // Add event listeners to navigation menu items
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the title attribute to determine which filter to apply
            const filter = this.getAttribute('title');
            
            let filteredTemples = [];
            
            switch(filter) {
                case 'Home':
                    filteredTemples = temples;
                    break;
                case 'Old':
                    filteredTemples = temples.filter(temple => {
                        const year = parseInt(temple.dedicated.split(',')[0]);
                        return year < 1900;
                    });
                    break;
                case 'New':
                    filteredTemples = temples.filter(temple => {
                        const year = parseInt(temple.dedicated.split(',')[0]);
                        return year > 2000;
                    });
                    break;
                case 'Large':
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    break;
                case 'Small':
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    break;
                default:
                    filteredTemples = temples;
            }
            
            displayTemples(filteredTemples);
        });
    });
});

// Navigation menu functionality
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
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
