document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list ul');

    hamburger.addEventListener('click', function() {
        // Toggle the active class on hamburger and navigation list
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });
});
