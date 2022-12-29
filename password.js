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