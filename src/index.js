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
const PRIVATE_KEY = process.env.PRIVATE_KEY


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
    gas:50000,
    data: contract.methods.newTenant('Temi', 300).encodeABI()
}

const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)  // this will return a promise that resolves into an object


// the promise will return a signedTransaction with a .raw or rawTransaction object
signPromise.then(
    (signedTransaction)=>{

        // use web3 to send the signed transaction
        const sentTransaction = web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
        
        // using event emmiter

        //  1. if a receipt is generated
        sentTransaction.on(
            "receipt", (receipt) => console.log(receipt)
        )

        //  2. an error is generated
        sentTransaction.on(
            "error", (err)=>console.log('insufficient gas fee')
        )
    }
).catch(err => console.log('there was an error'))


