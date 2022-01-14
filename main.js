console.log("It works");

// Connect to Moralis server
Moralis.initialize("yOGw5F1DxY2eA9ByFSlvoze95s9woOjLcHzxgm9Y");
Moralis.serverURL = "https://okraypjofzst.usemoralis.com:2053/server";

// Fetch metadata from URL
function fetchMetadata(NFTs){
    let promises = [];
    
    for(let i = 0; i < NFTs.length; i++){
         let nft = NFTs[i];
         let id = nft.token_id;

         // Call Moralis cloud function -> Static JSON file
         promises.push(fetch("https://okraypjofzst.usemoralis.com:2053/server/functions/getNFT?_ApplicationId=yOGw5F1DxY2eA9ByFSlvoze95s9woOjLcHzxgm9Y&nftId=" + id)
            .then(res => res.json())
            // Convert string into object
            .then(res => JSON.parse(res.result))
            .then(res => {nft.metadata = res})
            .then(() => {return nft;}))
    }

    return Promise.all(promises);
}

// Check if the user is login
async function initializeApp(){
    let currentUser = Moralis.User.current();
    if(!currentUser){
        currentUser = await Moralis.Web3.authenticate();
    }
    
    // Get NFTs data
    const options = { address: "0xbcbD0331394bcCEFbfC93C9355d362C798180d0e", chain: "rinkeby"}
    let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
    let NFTWithMetadata = await fetchMetadata(NFTs.result);
    console.log(NFTWithMetadata);
}

initializeApp();