import Web3 from 'web3';
import { createRequire } from 'module';
import { config } from 'dotenv';


// enable the use of require
const require = createRequire(import.meta.url)
const contractAbi = require("../build/contracts/Tenant.json")

// set the config of the environment variable
config()


// initialize the web3 provider
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')


// get the Id of the connected network
const networkId = await web3.eth.net.getId()

// get the contract address
const contractAddress = contractAbi.networks[networkId].address 

// get the public of the transaction signer
const PUBLIC_KEY = process.env.PUBLIC_KEY


// direct web3 to the contract using the contract abi and the contract address
const contract =  new web3.eth.Contract(contractAbi.abi, contractAddress)


//const registerTenant = await contract.methods.newTenant('Tom', 200).send({ from: PUBLIC_KEY })



/**
 * 
 * creating new account
 */

/*const createAccount = web3.eth.accounts.create()
const createdAccount = createAccount.address 
const createdPrivateKey = createAccount.privateKey

console.log("public key", createdAccount)
console.log("private key", createdPrivateKey)*/

const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    data: contract.methods.newTenant('Temi', 300).encodeABI()
}




