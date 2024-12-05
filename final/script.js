document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const projectType = document.getElementById("projectType").value;
        const comments = document.getElementById("comments").value.trim();

        // Validate fields
        if (!name || !email || !subject || !projectType) {
            alert("Please fill in all required fields.");
            return;
        }

        // Display confirmation message
        alert(`Thank you, ${name}! Your message has been submitted successfully.\n\nDetails:\n- Email: ${email}\n- Subject: ${subject}\n- Project Type: ${projectType}\n- Comments: ${comments || "None"}`);

        // Optionally, clear the form
        form.reset();
    });
});