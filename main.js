console.log("It works");

// Connect to Moralis server
Moralis.initialize("yOGw5F1DxY2eA9ByFSlvoze95s9woOjLcHzxgm9Y");
Moralis.serverURL = "https://okraypjofzst.usemoralis.com:2053/server";

// Check if the user is login
async function initializeApp(){
    let currentUser = Moralis.User.current();
    if(!currentUser){
        currentUser = await Moralis.Web3.authenticate();
    }
    
    const options = { address: "0xbcbD0331394bcCEFbfC93C9355d362C798180d0e", chain: "rinkeby"}
    let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
    console.log(NFTs);
}

initializeApp();