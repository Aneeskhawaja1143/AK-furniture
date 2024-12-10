function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}


function scrollToFAQs() {
    document.getElementById('faqs').scrollIntoView({ behavior: 'smooth' });
}
window.onload = function() {
    const marketingLine = document.querySelector('.marketing-line');
    marketingLine.classList.add('loaded');
};

document.getElementById('shopNowBtn').addEventListener('click', function() {
    window.location.href = 'shop.html';
});

// Optionally, add event listeners to close dropdowns when clicking outside
document.addEventListener('click', function (e) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (!dropdown.previousElementSibling.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});

