pragma solidity  ^0.5.0;

import "./ERC721Full.sol";

contract MemoryToken is ERC721Full {
  // Code goes here...
  string public name = "MemoryToken"  ;
   constructor() ERC721Full("MemoryToken" ,"Memory") public {

   }
}
