<?php
// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Composer autoload
require_once __DIR__ . '/../vendor/autoload.php';

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Require vendor and dotenv
require_once __DIR__ . '/../vendor/autoload.php';

// Load the .env file
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->safeLoad();

// Debugging: Test if API key is loaded from .env
$apiKey = getenv('OPENAI_API_KEY');
if (!$apiKey) {
    echo "Error: OpenAI API key not found";
    exit();
}

// Initialize cURL for OpenAI API request
$ch = curl_init();

// Get user input from the POST request (the question the user asks)
$data = json_decode(file_get_contents('php://input'), true);
$question = $data['question'] ?? '';

// Check if the question is provided
if (empty($question)) {
    echo json_encode(['error' => 'No question provided']);
    exit();
}

// Prepare the OpenAI API request data
$requestData = [
    'model' => 'gpt-3.5-turbo',
    'messages' => [
        ['role' => 'system', 'content' => 'You are a helpful assistant.'],
        ['role' => 'user', 'content' => $question]
    ],
    'max_tokens' => 150,
    'temperature' => 0.7
];

// cURL setup
curl_setopt($ch, CURLOPT_URL, 'https://api.openai.com/v1/chat/completions');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $apiKey",
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($requestData));

// Execute the cURL request
$response = curl_exec($ch);

// Check for cURL errors
if(curl_errno($ch)) {
    echo json_encode(['error' => 'Request failed: ' . curl_error($ch)]);
    curl_close($ch);
    exit();
}

// Close cURL
curl_close($ch);

// Decode the API response
$responseData = json_decode($response, true);

// Check if OpenAI returned a valid response
if (isset($responseData['choices'][0]['message']['content'])) {
    echo json_encode(['reply' => $responseData['choices'][0]['message']['content']]);
} else {
    echo json_encode(['error' => 'Failed to get a valid response from OpenAI']);
}
?>
