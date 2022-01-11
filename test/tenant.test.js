const Tenant = artifacts.require('./Contract');

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract('Tenant', (account)=>{

    const tenantDeployed = Tenant.new()
})