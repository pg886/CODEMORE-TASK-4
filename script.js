document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collecting the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (this can be expanded as needed)
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        return;
    }

    // Process the form data (e.g., send it to a server via AJAX, or just display a confirmation message)
    const confirmationMessage = `Thank you, ${name}! Your message has been received. We will contact you at ${email}.`;

    // Display the confirmation message
    document.getElementById('confirmationMessage').textContent = confirmationMessage;

    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});
