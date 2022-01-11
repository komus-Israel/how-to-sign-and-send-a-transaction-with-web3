const Tenant = artifacts.require('./Tenant');

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract('Tenant', (account)=>{

    let tenant

    beforeEach(async()=>{
        tenant = await Tenant.new()
    })

    

    

    describe("deployment", ()=>{
        it("deployed successfully", async ()=>{
            const address = tenant.address
            address.should.not.be.equal('', 'The contract has as address')
        })
    })
})