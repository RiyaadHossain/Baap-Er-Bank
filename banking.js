// Get All Variables 
const deposit_Display = document.getElementById("deposit-display");
const withdraw_Display = document.getElementById("withdraw-display");
const deposit_Input = document.getElementById("deposit-input");
const withdraw_Input = document.getElementById("withdraw-input");
const balance_Display = document.getElementById("balance-display");

// ============== Deposit Function ==============
document.getElementById("diposit-btn").addEventListener("click", function(){
    if(typeof parseFloat(deposit_Input.value) === "string"){
        alert("Please Enter Deposit Amount")
    } else{
        // Deposit Display 
        deposit_Display.innerText =
          parseFloat(deposit_Display.innerText) +
          parseFloat(deposit_Input.value);

        //   Balance Display 
        balance_Display.innerText =
          parseFloat(balance_Display.innerText) +
          parseFloat(deposit_Input.value);

        // Empty Input 
        deposit_Input.value = ""
    }
})


// ============== Withdraw Function ==============
document.getElementById("withdraw-btn").addEventListener("click", function(){
    if (typeof parseFloat(withdraw_Input.value) === "string") {
      alert("Please Enter Withdraw Amount");
    } else {
      // Withdraw Display
      withdraw_Display.innerText =
        parseFloat(withdraw_Display.innerText) + parseFloat(withdraw_Input.value);

      //   Balance Display
      balance_Display.innerText =
        parseFloat(balance_Display.innerText) - parseFloat(withdraw_Input.value);

      // Empty Input
      withdraw_Input.value = "";
    }
})