## How to Sign and Send a transaction with just web3 js

Building a client Application to interact with a smart contract would
require the need for MetaMask to sign and authorize transactions. However, there are limitations to this approach and posibilities of solutions that can be built with this approach.

### Limitations with MetaMask

* Mobile web applications can't work with the metamask extension, limiting the metamask possibilities to web applications on desktop.

* Mobile Andriod/IOS apps can't interact with metamask, they'd need to interact with a web API to communicate with the blockchain.

### How web3 solves the problem

* With web3, transactions can be signed and sent to the blockchain

* Web APIS can be built with this approach for applications to interact with the blockchain without the need for MetaMask


## Cons

* This approach can be costly if private keys are handled insecurely and carelessly. This approach places a huge demand on strong security of the applications that will be using this approach.
