// script.js
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    // You can add your own logic here, such as sending the form data to your server or displaying a success message.
    alert('Thank you for your message!');
    this.reset(); // Reset the form
  });
  