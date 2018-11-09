pragma solidity ^0.4.23;

contract Migrations {
    address owner;

  // mapping from geolocation to hash
	mapping (uint8=>uint8) hashlocation;

	function getHash(uint8 geolocation) public returns (uint8) {
        require(0);
	}

}