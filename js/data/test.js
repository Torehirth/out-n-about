// create an HTML form with a text field and button
// Add an event listen to the button to send a get request to /generate endpoint and display response in a div with id "result".
// create js validation on the formlet form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  let emailField = document.getElementById('email');
  let email = emailField.value;
  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    event.preventDefault();
  }
});