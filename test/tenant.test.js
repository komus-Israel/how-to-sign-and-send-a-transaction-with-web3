const { equal } = require("assert");

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

        let registerTenant
        let tenantName = "Tim"
        let price = 200

        beforeEach( async()=>{
            registerTenant = await tenant.newTenant(tenantName, price, { from:account })
        })
        
        it("emits an event after registering a new tenant", async()=>{
           registerTenant.logs[0].event.should.be.equal('TenantRegistered', 'it emitted the event rightly')
           //console.log(registerTenant)
        })

        it("emits the right data", async()=>{
            registerTenant.logs[0].args._name.should.be.equal(tenantName, "it emits the registered name")
            registerTenant.logs[0].args._price.toString().should.be.equal(price.toString(), "it emits the registered price")
            
        })
    })
    })
})