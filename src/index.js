import Web3 from 'web3';
import { createRequire } from 'module';


// enable the use of require
const require = createRequire(import.meta.url)
const contractAbi = require("../build/contracts/Tenant.json")


// initialize the web3 provider
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')


// get the Id of the connected network
const networkId = await web3.eth.net.getId()

// get the contract address
const address = contractAbi.networks[networkId].address 

// direct web3 to the contract using the contract abi and the contract address
const contract =  new web3.eth.Contract(contractAbi.abi, address)
console.log(contract)
