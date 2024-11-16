<?php
// Enable CORS for local testing (optional, remove for production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Get JSON input from the AJAX request
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if ($data) {
    // Sanitize and extract values from the input
    $firstName = htmlspecialchars($data['firstName'] ?? '');
    $lastName = htmlspecialchars($data['lastName'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $age = htmlspecialchars($data['age'] ?? '');

    // Validate input
    if ($firstName && $lastName && $email && $age) {
        // Respond with success
        echo json_encode([
            "status" => "success",
            "message" => "Form submitted successfully!",
            "submittedData" => [
                "firstName" => $firstName,
                "lastName" => $lastName,
                "email" => $email,
                "age" => $age
            ]
        ]);
    } else {
        // Respond with an error for missing fields
        http_response_code(400);
        echo json_encode([
            "status" => "error",
            "message" => "Please fill out all required fields."
        ]);
    }
} else {
    // Respond with an error for invalid JSON input
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid form data submitted."
    ]);
}
?>