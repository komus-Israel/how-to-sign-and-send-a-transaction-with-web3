import Web3 from 'web3';
//import '../build/contracts/Tenant.json'

const web = new Web3(Web3.givenProvider || 'http://localhost:8545')


const networkId = await web.eth.net.getId()

console.log(networkId)