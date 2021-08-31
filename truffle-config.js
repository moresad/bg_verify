const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        // development: {
        //     host: "127.0.0.1", // Localhost (default: none)
        //     port: 8545, // Standard Ethereum port (default: none)
        //     network_id: "*" // Any network (default: none)
        // }
        ganache: {
            host: "localhost",
            port: 7545,
            gas: 20000000,
            network_id: "*"
        }
    },
    compilers: {
        solc: {
            version: "0.5.0"
        }
    }
};