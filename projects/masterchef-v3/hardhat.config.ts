/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "solidity-docgen";
import "dotenv/config";

require("dotenv").config({ path: require("find-config")(".env") });

const pulseMainnet: NetworkUserConfig = {
  url: "https://rpc.pulsechain.com",
  chainId: 369,
  accounts: [process.env.KEY_TESTNET!],
  gasPrice: 1500000000000000
};

const bscMainnet: NetworkUserConfig = {
  url: "https://bsc-dataseed.binance.org/",
  chainId: 56,
  accounts: [process.env.KEY_MAINNET!],
};

const goerli: NetworkUserConfig = {
  url: "https://rpc.ankr.com/eth_goerli",
  chainId: 5,
  accounts: [process.env.KEY_GOERLI!],
};

const eth: NetworkUserConfig = {
  url: "https://eth.llamarpc.com",
  chainId: 1,
  accounts: [process.env.KEY_ETH!],
};

const config = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    ...(process.env.KEY_TESTNET && { pulseMainnet }),
    ...(process.env.KEY_MAINNET && { bscMainnet }),
    ...(process.env.KEY_GOERLI && { goerli }),
    ...(process.env.KEY_ETH && { eth }),
    // testnet: pulseMainnet,
    // mainnet: bscMainnet,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || '',
    customChains: [
      {
        network: "pulseMainnet",
        chainId: 369,
        urls: {
          apiURL: "https://scan.pulsechain.com/api",
          browserURL: "https://scan.pulsechain.com/"
        }
      }
    ],
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts/",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  docgen: {
    pages: "files",
  },
};

export default config;
