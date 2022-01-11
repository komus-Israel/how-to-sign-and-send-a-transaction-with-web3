const Tenant = artifacts.require('Tenant')

module.exports = function (deployer) {
    deployer.deploy(Tenant)
}