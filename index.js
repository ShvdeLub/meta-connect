
const ethereumButton = document.querySelector(".enableEthereum");
const showAccount = document.querySelector(".showAccount");
const sendBtn = document.querySelector(".sendEth");

let accounts = []

ethereumButton.addEventListener("click", () => {
  //Will Start the metamask extension
  getAccount();
  ethereumButton.innerHTML = "Swap";
  ethereumButton.setAttribute("name", "swap");

});

sendBtn.addEventListener('click', async () => {
    const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: '0x6fA87A8F74a686eac74d3aEe17d1FB423D494FD7',
                value: '1000000000000'
            },
        ],
    })
    
    console.log(await txHash)
    .catch((error) => console.log(error))
})

async function getAccount() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  showAccount.innerHTML = accounts;
}


