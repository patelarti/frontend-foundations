// JavaScript to handle form submission
document.getElementById('basicForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // const message = document.getElementById('message').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Log the form data to the console
    console.log('Form Submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    // console.log('Message:', message);
});