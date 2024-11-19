document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("exampleForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Collect inputs into an object
        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            address: document.getElementById("address") ? document.getElementById("address").value.trim() : "",
            city: document.getElementById("city").value,
            projectType: document.getElementById("project-type").value,
            projectDescription: document.getElementById("project").value.trim(),
        };

        // Validation
        const errors = [];
        if (!formData.name) errors.push("Name is required.");
        if (!formData.email) errors.push("Email is required.");
        if (!formData.phone) errors.push("Phone number is required.");
        if (!formData.city) errors.push("City must be selected.");
        if (!formData.projectType) errors.push("Project Type must be selected.");
        if (!formData.projectDescription) errors.push("Project Description is required.");

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        // Serialize form data into query string
        const queryParams = new URLSearchParams(formData).toString();

        // AJAX call to mock server
        const xhr = new XMLHttpRequest();
        const url = `projects/newform/response.json?${queryParams}`; // Append data to URL
        xhr.open("GET", url, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const messageDiv = document.getElementById("message");
                if (messageDiv) {
                    messageDiv.innerText = response.message;
                    messageDiv.style.color = "green"; // Style success message
                }
                form.reset();
            } else {
                alert("An error occurred while processing your form.");
            }
        };

        xhr.onerror = function () {
            alert("An error occurred during the AJAX request.");
        };

        xhr.send(); // Send GET request
    });
});
