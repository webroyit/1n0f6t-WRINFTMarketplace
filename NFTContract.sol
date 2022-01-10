// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import contracts from Openzepplin
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

// 'is' inherit ERC1155 and Ownable openzeppelin contract
contract NFTContract is ERC1155, Ownable {
    uint256 public constant ARTWORK = 0;
    uint256 public constant PHOTO = 1;

    // Add URL to ERC1155 contract
    constructor() ERC1155("https://000e155m12kundcrkeh72ckooc5c5uvp6ie5dmnhdphiclcdfbjpijg.siasky.net/{id}.json") {
        // '_mint()' is from ERC1155 openzeppelin contract
        _mint(msg.sender, ARTWORK, 1, "");
        _mint(msg.sender, PHOTO, 2, "");
    }

    // Mint tokens
    // 'onlyOwner' is from Ownable openzeppelin contract and using it as modifier
    // Modifier is a snippet of code that gets run before this function gets run
    // 'onlyOwner' make sure that the caller is actually equal to the owner
    function mint(address account, uint256 id, uint256 amount) public onlyOwner{
        // Make sure that this function can only be called by the owner
        _mint(account, id, amount, "");
    }
    
    // Burn tokens
    function burn(address account, uint256 id, uint256 amount) public {
        // Make sure that this function can only be called by the token owner
        require(msg.sender == account);
        _burn(account, id, amount);
    }
}