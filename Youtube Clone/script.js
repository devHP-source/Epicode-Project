const menuButton = document.querySelector('.menu-button');

// Toggle the sidebar visibility when the menu button is clicked
menuButton.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
});