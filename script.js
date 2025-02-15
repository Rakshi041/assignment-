// Function to calculate factorial iteratively
function factorialIterative(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate factorial recursively
function factorialRecursive(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorialRecursive(num - 1);
}

// Function to validate the input and calculate the factorial
function calculateFactorial(method) {
    const num = document.getElementById("number").value;
    const resultElement = document.getElementById("factorial-result");
    const methodUsedElement = document.getElementById("method-used");

    // Clear previous result
    resultElement.textContent = '';
    methodUsedElement.textContent = '';

    // Input validation
    if (num === '' || num < 0) {
        resultElement.textContent = "Please enter a valid positive integer.";
        return;
    }

    const number = parseInt(num);

    let result;
    if (method === 'iterative') {
        result = factorialIterative(number);
        methodUsedElement.textContent = 'Method used: Iterative';
    } else if (method === 'recursive') {
        result = factorialRecursive(number);
        methodUsedElement.textContent = 'Method used: Recursive';
    }

    resultElement.textContent = `Factorial of ${number} is ${result}`;
}
