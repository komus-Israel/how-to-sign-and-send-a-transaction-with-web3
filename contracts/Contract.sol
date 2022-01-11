pragma solidity 0.8.10;

contract Tenant {

    // variables to store tenant data

    string public name;
    string public age;
    uint256 public price;


    // struct to store the tenant's data
    struct _Tenant {
        string name;
        string age;
        uint256 price;
    }

    map(uint256 => _Tenant);

}