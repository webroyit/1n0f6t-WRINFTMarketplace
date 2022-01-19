// Connect to Moralis server
Moralis.initialize("yOGw5F1DxY2eA9ByFSlvoze95s9woOjLcHzxgm9Y");
Moralis.serverURL = "https://okraypjofzst.usemoralis.com:2053/server";
const CONTRACT_ADDRESS = "0xbcbD0331394bcCEFbfC93C9355d362C798180d0e";

// Check if the user is login
async function initializeApp(){
    let currentUser = Moralis.User.current();
    if(!currentUser){
        // Redirect
        window.location.pathname = "/index.html";
    }
    
    // Get NFT data
    // Get the params from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const nftId = urlParams.get("nftId");
    console.log(nftId);

    // Set the token input field
    document.getElementById("token_id_input").value = nftId;
}

async function mint(){
    // Smart Contract expect string, not number
    let tokenId = parseInt(document.getElementById("token_id_input"));
    let address = document.getElementById("address_input");
    let amount = parseInt(document.getElementById("amount_input"));
}

initializeApp();