const Tenant = artifacts.require('./Tenant');

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract('Tenant', (account)=>{

    const tenantDeployed = await Tenant.new()

    const address = tenantDeployed.address

    describe("deployment", ()=>{
        it("deployed successfully", async ()=>{
            address.should.not.be.equal('', 'The contract has as address')
        })
    })
})