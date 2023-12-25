document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Fetch username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login authentication logic here
    // For demonstration purposes, you might simulate a login process or use APIs

    // Example of showing a message upon form submission
    alert(
      "Login attempt for username: " + username + ", password: " + password
    );
  });
