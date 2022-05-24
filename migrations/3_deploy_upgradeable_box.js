// migrations/3_deploy_upgradeable_box.js
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const BoxV1 = artifacts.require('BoxV1');

module.exports = async function (deployer) {
  await deployProxy(BoxV1, [42], { deployer, initializer: 'store' });
};