document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Hide the form
    const form = document.getElementById("contactForm");
    form.style.display = "none";

    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thanks for submitting, we will contact you soon!";
    thankYouMessage.style.textAlign = "center";
    thankYouMessage.style.fontSize = "18px";
    thankYouMessage.style.color = "#333";
    
    // Append the message below the form
    form.insertAdjacentElement('afterend', thankYouMessage);
});

// Helper function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}