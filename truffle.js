module.exports = {
  // See <https://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }

  },
  compilers: {
    solc: {
      version: '0.5.2',
    }
  }
};