document.getElementById("submit-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("email-input");
  const userPass = document.getElementById("pass-input");
  
  if (userEmail.value == "child@gmail.com" && userPass.value == "secret") {
    window.location.href = "banking.html";
  }
});
