const ethereumButton = document.querySelector(".enableEthereum");
const showAccount = document.querySelector(".showAccount");
const swapBtn = document.querySelector(".swapAccounts");

document.addEventListener("DOMContentLoaded", () => {
  ethereumButton.innerHTML = "connect";
});

ethereumButton.addEventListener("click", () => {
  //Will Start the metamask extension
  getAccount();
  ethereumButton.innerHTML = "Swap";
  ethereumButton.setAttribute("name", "swap");
  if (ethereumButton.getAttribute("name" == "swap")) {
    swapAccount();
  }
});

async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  showAccount.innerHTML = account;
}

async function swapAccount() {
  const newAccounts = await ethereum.request({ method: "eth_requestAccounts" });
  const newAccount = newAccounts[0];
  if (newAccount == account) {
    alert("take another account than the first one");
  } else {
    showAccount.innerHTML = newAccount;
  }
}
