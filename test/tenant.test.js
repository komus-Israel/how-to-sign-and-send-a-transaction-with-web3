const Tenant = artifacts.require('./Tenant');

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract('Tenant', ([account])=>{

    let tenant

    beforeEach(async()=>{
        tenant = await Tenant.new()
    })

    

    

    describe("deployment", ()=>{
        it("deployed successfully", async ()=>{
            const address = tenant.address
            address.should.not.be.equal('', 'The contract has as address')
        })

    describe("registering new tenant", ()=>{
        
        it("registers a new tenant", async()=>{
            const registerTenant = await tenant.newTenant("Tim", 200, { from:account })
        })
    })
    })
})