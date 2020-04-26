// Elements
const nav = document.querySelector('header > nav');
const toggleNavButton = document.querySelector('header > button#toggle-nav-button');

// Events
// nav.onclick = stopPropagation;
toggleNavButton.onclick = showNav;
window.onclick = hideNav;

// Declarations
let navVisible = false;

// Functions
// function stopPropagation(event) {
// 	event.stopPropagation();
// }

function showNav(event) {
	navVisible = true;
	nav.classList.add('active');
	event.stopPropagation();
}

function hideNav() {
	if(navVisible) {
		navVisible = false;
		nav.classList.remove('active');
	}
}