function checkPassword() {
  // Get the entered password
  var password = prompt("Enter password to unlock page:");

  // Check if the password is correct
  if (password == "qwe123") {
    // If the password is correct, remove the lock-overlay element
    document.getElementById("lock-overlay").remove();
  } else {
    // If the password is incorrect, display an error message
    alert("Incorrect password. Please try again.");
  }
}
function openFromBottom() {
  // Get the height of the document
  var height = document.body.scrollHeight;

  // Scroll to the bottom of the page
  window.scrollTo(0, height);
}

// Call the function when the page loads
window.onload = openFromBottom;