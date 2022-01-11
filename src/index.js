import Web3 from 'web3';
import { createRequire } from 'module';

const require = createRequire(import.meta.url)


const contractAbi = require("../build/contracts/Tenant.json")

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')

console.log(contractAbi)