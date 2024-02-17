// Menu toggle for mobile responsiveness
const menuIcon = document.querySelector('.menu-icon');
const cancelIcon = document.querySelector('.cancel-icon');
const headerLinks = document.querySelector('.header-links');

function openMenu() {
  headerLinks.style.display = 'block'; // Display the header links
  headerLinks.style.right = '0'; // Align the header links to the right
}

function closeMenu() {
  headerLinks.style.right = '-100vh'; // Move the header links off the viewport horizontally
  headerLinks.style.display = 'none'; // Hide the header links
}

// Event listeners for menu and cancel icons
menuIcon.addEventListener('click', openMenu);
cancelIcon.addEventListener('click', closeMenu);

// Theme color change script
const themeInput = document.getElementById('theme');

function setInitialThemeColor() {
  const primaryThemeColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-theme-color');
  themeInput.value = primaryThemeColor; // Set the color picker value to the initial theme color
}

function updateThemeColor() {
  const color = themeInput.value; // Get the selected color value from the input
  document.documentElement.style.setProperty('--primary-theme-color', color); // Update the primary theme color variable in CSS
}

// Event listener for theme color input change
themeInput.addEventListener('input', updateThemeColor);

// Set initial theme color when the script runs
setInitialThemeColor();

// copyright logic

// Sélectionnez l'élément <p> avec l'ID "copyright-paragraph"
let copyrightParagraph = document.getElementById("copyright-paragraph");

// Obtenez l'année actuelle
let currentYear = new Date().getFullYear();

// Ajoutez la balise &copy; et l'année actuelle au contenu du paragraphe
copyrightParagraph.innerHTML = "&copy; " + currentYear + " - Hugo Ondedieu - All Rights Reserved.";

function changeMain() {
  var oldImg = document.getElementById('OldImageMain');
  if (oldImg.src.includes('hugo-eyes-opened.png')) {
      oldImg.src = "./assets/img/hugo-eyes-closed.png";
  } else {
      oldImg.src = "./assets/img/hugo-eyes-opened.png";
  }
}  
const delay = ms => new Promise(res => setTimeout(res, ms));

function changeAbout(){
  var oldImg = document.getElementById('OldImageAbout');

  if (oldImg.src.includes('hugo-eyes-opened.png')) {
    oldImg.src = "./assets/img/hugo-eyes-wink.png";
    setTimeout(function() {
        oldImg.src = "./assets/img/hugo-eyes-opened.png";
    }, 250); // Wait for 2 seconds (2000 milliseconds) before changing back to eyes opened
} else {
    oldImg.src = "./assets/img/hugo-eyes-opened.png";
}

}

function ChangeLanguage() {
  var currentUrl = window.location.href;
  var newUrl;

  if (currentUrl.includes('index.html')) {
      // If the current page is in French, redirect to the English version
      newUrl = currentUrl.replace('index.html', 'index-en.html');
  } else if (currentUrl.includes('index-en.html')) {
      // If the current page is in English, redirect to the French version
      newUrl = currentUrl.replace('index-en.html', 'index.html');
  } else {
      // If the current page is neither English nor French, redirect to the French version by default
      newUrl = currentUrl + 'index.html';
  }

  // Redirect the user to the new language version
  window.location.href = newUrl;
}