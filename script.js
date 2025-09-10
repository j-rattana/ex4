/* The initial plan for this is to find a way to click on the vault image in index.html and 
have it transform into the open vault image for some interactivity on the home page. I am having
ChatGPT help me understand how to do certain codes and what each part means.
*/

  // Trying to use JavaScript to swap images when clicked (Credits to ChatGPT)
  var vault=document.getElementById("ClosedVault");

vault.addEventListener("click", function() {
  if (vault.src.includes("better vault.png")) {
    vault.src="./assets/half-open-bank-vault-door-white-safe-bank-metal-door-safe-lock-security-bank-open-safe-bank-vector-illustration.png";
  } else {
    vault.src="./assets/better vault.png";
  }
});
