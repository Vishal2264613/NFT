require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
    fuji: {
      url: process.env.QUICKNODE_API_KEY_URL,
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
};
