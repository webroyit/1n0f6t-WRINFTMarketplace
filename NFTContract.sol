param solidity ^0.8.0;

// Import ERC1155 token contract from Openzepplin
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";

// 'is' inherit ERC1155 openzeppelin contract
contract NFTContract is ERC1155 {
    uint256 public constant ARTWORK = 0;
    uint256 public constant PHOTO = 1;

    contructor() ERC1155("url") {
        //_mint() is from ERC1155 openzeppelin contract
        _mint(msg.sender, ARTWORK, 1, "");
        _mint(msg.sender, PHOTO, 2, "");
    }
}