document.getElementById("submit-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("email-input");
  const userPass = document.getElementById("pass-input");
  console.log(userEmail.value)
  console.log(userPass.value)
  if (userEmail.value == "child@gmail.com" && userPass == "secret") {
    window.location.href = "banking.html";
    console.log("you clicked it, yesss");
  }
});
