// Get All Variables
const deposit_Display = document.getElementById("deposit-display");
const withdraw_Display = document.getElementById("withdraw-display");
const deposit_Input = document.getElementById("deposit-input");
const withdraw_Input = document.getElementById("withdraw-input");
const balance_Display = document.getElementById("balance-display");

// Display Deposit and Withdraw in one shareable function
function sub_Display(display, input) {
  display.innerText = parseFloat(display.innerText) + parseFloat(input.value);
  return display.innerText;
}

// Display Balance in one shareable function
function bal_Display(subDisplay, ispositive) {
 if(ispositive == true){
   balance_Display.innerText =
     parseFloat(balance_Display.innerText) + parseFloat(subDisplay);
   // Empty Input
   deposit_Input.value = "";
   return balance_Display.innerText;
 }else{
    balance_Display.innerText =
      parseFloat(balance_Display.innerText) - parseFloat(subDisplay);
    // Empty Input
    deposit_Input.value = "";
    return balance_Display.innerText;
 }
}

// ============== Deposit Function ==============
document.getElementById("diposit-btn").addEventListener("click", function () {
  // Deposit Display
  /*  diposit_Display.innerText =
         parseFloat(diposit_Display.innerText) + parseFloat(diposit_Input.value); */

  // ***************** Deposit Display - One shared Function *****************
  const dipo_Display = sub_Display(deposit_Display, deposit_Input);

  //   Balance Display
  /*  balance_Display.innerText =
    parseFloat(balance_Display.innerText) + parseFloat(diposit_Input.value); */

  // ***************** Balance Display - One shared Function *****************
  bal_Display(dipo_Display, true);
});

// ============== Withdraw Function ==============
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // Withdraw Display
  /*  withdraw_Display.innerText =
         parseFloat(withdraw_Display.innerText) + parseFloat(withdraw_Input.value); */

  // ***************** Withdraw Display - One shared Function *****************
  const with_Display = sub_Display(withdraw_Display, withdraw_Input);

  //   Balance Display
  /*  balance_Display.innerText =
    parseFloat(balance_Display.innerText) - parseFloat(withdraw_Input.value); */

  // ***************** Balance Display - One shared Function *****************
  bal_Display(with_Display, false);

  // Empty Input
  withdraw_Input.value = "";
});
