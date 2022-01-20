// Connect to Moralis server
Moralis.initialize("yOGw5F1DxY2eA9ByFSlvoze95s9woOjLcHzxgm9Y");
Moralis.serverURL = "https://okraypjofzst.usemoralis.com:2053/server";
const CONTRACT_ADDRESS = "0xbcbD0331394bcCEFbfC93C9355d362C798180d0e";
let web3;

// Check if the user is login
async function initializeApp(){
    let currentUser = Moralis.User.current();
    if(!currentUser){
        // Redirect
        window.location.pathname = "/index.html";
    }

    web3 = await Moralis.Web3.enable();     // Use web3
    let accounts = await web3.eth.getAccounts();        // Get address from Login with Moralis
    console.log(accounts);
    
    // Get NFT data
    // Get the params from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const nftId = urlParams.get("nftId");
    console.log(nftId);

    // Set the value of the input fields
    document.getElementById("token_id_input").value = nftId;
    document.getElementById("address_input").value = accounts[0];
}

async function mint(){
    // Smart Contract expect string, not number
    let tokenId = parseInt(document.getElementById("token_id_input").value);
    let address = document.getElementById("address_input").value;
    let amount = parseInt(document.getElementById("amount_input").value);

    const accounts = await web3.eth.getAccounts();
    console.log("f")

    // Call contract method mint
    const contract = new web3.eth.Contract(contractAbi, CONTRACT_ADDRESS);
    contract.methods.mint(address, tokenId, amount).send({ from: accounts[0], value: 0});
}

document.getElementById("submit_mint").onclick = mint;

initializeApp();