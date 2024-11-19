document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("exampleForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Collect inputs into an object
        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            address: document.getElementById("address").value.trim(),
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

        // Log the object to the console
        console.log("Form Data Submitted:", formData);

        // AJAX call to mock server
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "response.json", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById("message").innerText = response.message;

                // Notify user and reset the form
                form.reset();
            } else {
                alert("An error occurred while processing your form.");
            }
        };

        xhr.onerror = function () {
            alert("An error occurred during the AJAX request.");
        };

        xhr.send();
    });
});
