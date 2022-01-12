import Web3 from "web3";
import { createRequire } from 'module';


const require = createRequire(import.meta.url)
const contractAbi = require("../build/contracts/Tenant.json")

// initialize the web3 provider
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')


// get the Id of the connected network
const networkId = await web3.eth.net.getId()

// get the contract address
const contractAddress = contractAbi.networks[networkId].address 

const contract =  new web3.eth.Contract(contractAbi.abi, contractAddress)

const tenantEvent = await contract.getPastEvents('TenantRegistered', { fromBlock:0, toBlock:'latest' })

console.log(tenantEvent)