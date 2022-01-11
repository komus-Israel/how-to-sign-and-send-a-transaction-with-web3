const Tenant = require.artifacts('Tenant')

module.exports = function (deployer) {
    deployer.deploy(Tenant)
}