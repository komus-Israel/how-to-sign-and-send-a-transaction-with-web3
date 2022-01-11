pragma solidity 0.8.10;

contract Tenant {


    // struct to store the tenant's data
    struct _Tenant {
        string name;
        uint256 price;
    }

    uint256 counter;

    map(uint256 => _Tenant) public tenants;

    function newTenant(string memory name, uint256 price) public {
        counter = counter + 1;
        tenants[counter] = _Tenant(name, price);
    }

}