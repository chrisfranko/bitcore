var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('7defaced'),
  addressVersion: 0x23,
  privKeyVersion: 0xa3,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('F44F4E392298C7044A1D09093FA19CA4694AC89E9495B712165835D09EA52291'),
    merkle_root: hex('ACD12A61D56526A011FAB30C071EE4D324DB7BD1A5D3DE54CC92001D1F97F87B'),
    height: 0,
    nonce: 731837,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1368144664,
    bits: 504365040,
  },
  dnsSeeds: [
    'www.dirtydiggers.org',
    'seed.frankos.org',
    'seed2.frankos.org',
    'seed3.frankos.org',
    'seed4.frankos.org',
    'seed5.frankos.org'
  ],
  defaultClientPort: 7912
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('6defaced'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 385607496,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1368187357,
    bits: 504365040,
  },
  dnsSeeds: [
    'testnet-seed.frankos.org',
    'testnet-seed2.frankos.org'
  ],
  defaultClientPort: 17912
};
