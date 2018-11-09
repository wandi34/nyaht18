pragma solidity ^0.4.23;

contract CarData {
    address owner;

    mapping (uint8 => uint8) data;
    constructor () public {
    }
  // mapping from geolocation to hash
//    mapping (uint8=>uint8) hashlocation;

    // function getHash(uint8 geolocation) public returns (uint8) {
    //   var location = hashlocation[geolocation];
		//   return location;
    // }

    // function setHash(uint8 geolocation, uint8 ) public {
    //   hashlocation[geolocation] = 
    // }
    function setWeather(uint8 _geolocation,uint8 _weather) public {
        owner = msg.sender;
        data[_geolocation] = _weather;
    }

    function getWeatherForGeolocation(uint8 _geolocation) view returns (uint8) {
        return data[_geolocation];
    }
}