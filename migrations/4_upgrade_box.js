const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const BoxV1 = artifacts.require('BoxV1');
const BoxV2 = artifacts.require('BoxV2');

module.exports = async function (deployer) {
  const existing = await BoxV1.deployed();
  await upgradeProxy(existing.address, BoxV2, { deployer });
};

