// Navigation menu functionality
const hamButton = document.querySelector("#menu");
const pages = document.querySelector(".pages");
const header = document.querySelector("header");

// Load menu state from localStorage on page load
function loadMenuState() {
    const menuState = localStorage.getItem('menuOpen');
    if (menuState === 'true') {
        pages.classList.add("open");
        hamButton.classList.add("open");
        header.classList.add("menu-open");
    }
}

// Save menu state to localStorage
function saveMenuState(isOpen) {
    localStorage.setItem('menuOpen', isOpen.toString());
}

// Initialize menu state when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadMenuState();
});

hamButton.addEventListener("click", () => {
    const isCurrentlyOpen = pages.classList.contains("open");
    
    pages.classList.toggle("open");
    hamButton.classList.toggle("open");
    header.classList.toggle("menu-open");
    
    // Save the new state (opposite of current state)
    saveMenuState(!isCurrentlyOpen);
});

// Mod data array
const mods = [
    {
        modName: "JEI (Just Enough Items)",
        creator: "mezz",
        minecraftVersions: "1.8, 1.8.8-1.8.9, 1.9, 1.9.4, 1.10, 1.10.2, 1.11, 1.11.2, 1.12.x, 1.13.2, 1.14.2-1.14.4, 1.15.1-1.15.2, 1.16.1-1.16.5, 1.17.1, 1.18.x, 1.19.x, 1.20-1.20.2, 1.20.4, 1.20.6, 1.21-1.21.1, 1.21.4-1.21.5, 1.21.7-1.21.8",
        imageUrl: "images/just-enough-items.jpg",
        modPageUrl: "https://modrinth.com/mod/jei/gallery"
    },
    {
        modName: "Biomes O' Plenty",
        creator: "Forstride, Adubbz",
        minecraftVersions: "1.7.10, 1.8, 1.8.8-1.8.9, 1.9, 1.9.4, 1.10, 1.10.2, 1.11, 1.11.2, 1.12.x, 1.13.2, 1.14.3-1.14.4, 1.15.1-1.15.2, 1.16.1, 1.16.3-1.16.5, 1.17.1, 1.18.1-1.18.2, 1.19.x, 1.20-1.20.2, 1.20.4, 1.20.6, 1.21-1.21.1, 1.21.3-1.21.8",
        imageUrl: "images/biomes-o-plenty.png",
        modPageUrl: "https://modrinth.com/mod/biomes-o-plenty"
    },
    {
        modName: "RLCraft",
        creator: "Shivaxi",
        minecraftVersions: "1.11.2, 1.12.2",
        imageUrl: "images/rlcraft.webp",
        modPageUrl: "https://www.curseforge.com/minecraft/modpacks/rlcraft"
    },
    {
        modName: "Vanilla Perfected",
        creator: "demonjoeTV",
        minecraftVersions: "1.20.1, 1.21-1.21.1, 1.21.4-1.21.6, 1.21.8",
        imageUrl: "images/vanilla-perfected.png",
        modPageUrl: "https://modrinth.com/modpack/vanilla-perfected"
    },
    {
        modName: "Better MC",
        creator: "Luna Pixel Studios",
        minecraftVersions: "Depends on the mod version.",
        imageUrl: "images/better-mc.jpg",
        modPageUrl: "https://modrinth.com/modpack/better-mc-fabric-bmc3"
    },
    {
        modName: "Fabulously Optimized",
        creator: "Fabulously Optimized",
        minecraftVersions: "1.16.5, 1.17.1, 1.18.1-1.18.2, 1.19.x, 1.20.x, 1.21.x",
        imageUrl: "images/fabulously-optimized.jpg",
        modPageUrl: "https://modrinth.com/modpack/fabulously-optimized"
    }
];

// Function to create mod cards
function createModCard(mod) {
    const card = document.createElement('a');
    card.className = 'mod-card';
    
    // Add specific classes for mods that need larger text areas
    if (mod.modName === "JEI (Just Enough Items)" || mod.modName === "Biomes O' Plenty") {
        card.classList.add('large-text-overlay');
    }
    
    card.href = mod.modPageUrl;
    card.target = '_blank';
    card.rel = 'noopener';
    card.style.backgroundImage = `url('${mod.imageUrl}')`;
    
    card.innerHTML = `
        <div class="mod-card-overlay">
            <h3 class="mod-name">${mod.modName}</h3>
            <p class="mod-creator">by ${mod.creator}</p>
            <p class="mod-versions">MC ${mod.minecraftVersions}</p>
        </div>
    `;
    
    return card;
}

// Function to display all mods
function displayMods(modsToShow) {
    const container = document.querySelector('#mod-card-container');
    if (container) {
        container.innerHTML = ''; // Clear existing content
        modsToShow.forEach(mod => {
            const modCard = createModCard(mod);
            container.appendChild(modCard);
        });
    }
}

// Display all mods when page loads (only on mod page)
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the mod page
    if (document.querySelector('#mod-card-container')) {
        displayMods(mods);
    }
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
