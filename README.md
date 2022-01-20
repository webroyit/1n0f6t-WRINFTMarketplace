# WRI Marketplace

## View Metadata on Open Sea
- Go to https://opensea.io/get-listed

## Add cloud function in Moralis
```
// Name of the function
Moralis.Cloud.define("getNFT", async (request) => {
    // console.log()
    const logger = Moralis.Cloud.getLogger();

    let NFTId = request.params.nftId;
    let hexId = parseInt(NFTId).toString(16); // Convert NFT Id into a hex Id
    let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + hexId).slice(-64);

    logger.info(paddedHex);

    return Moralis.Cloud.httpRequest({ url: "https://000e155m12kundcrkeh72ckooc5c5uvp6ie5dmnhdphiclcdfbjpijg.siasky.net/" + paddedHex + ".json"})
        .then(function(httpResponse){
            return httpResponse.text;
        },function(httpResponse) {
            // error
            console.error('Request failed with response code ' + httpResponse.status);
        })
});
```

## Notes
- Metadata must follow this standard. https://eips.ethereum.org/EIPS/eip-1155#metadata
- Moralis has Web3 library built in
- Contact ABI is the specification or interface of the smart contract.  It allows this website to know which functions are available and what parameters these functions accept