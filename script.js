function showSection(sectionId) {
    // Hide all main sections
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('collectionsSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('contactSection').style.display = 'none';

    if (sectionId !== 'homeSection') {
        document.getElementById('homeSection').style.display = 'none';
        document.getElementById(sectionId).style.display = 'block';
    }
}

// Navigation buttons
document.getElementById('homeBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('homeSection');
});
document.getElementById('collectionsBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('collectionsSection');
});
document.getElementById('aboutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('aboutSection');
});
document.getElementById('contactBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('contactSection');
});

// Shop Collection button
document.getElementById('shopBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('collectionsSection');
});

// Our Story button
document.getElementById('storyBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('aboutSection');
});

// Alert when "Add to Cart" is clicked
document.querySelectorAll('button').forEach(function(btn) {
    if (btn.textContent === "Add to Cart") {
        btn.addEventListener('click', function() {
            alert("Added to cart!");
        });
    }
});

// Email form validation
document.querySelector('form').addEventListener('submit', function(e) {
    var emailInput = this.querySelector('input[type="email"]');
    var email = emailInput.value;
    var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    } else {
        alert("Thank you for joining the Brotherhood!");
    }
});