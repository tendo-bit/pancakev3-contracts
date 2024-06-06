import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@typechain/hardhat'
import 'dotenv/config'
import { NetworkUserConfig } from 'hardhat/types'
import 'solidity-docgen';
require('dotenv').config({ path: require('find-config')('.env') })

const pulseMainnet: NetworkUserConfig = {
  url: 'https://rpc.pulsechain.com',
  chainId: 369,
  accounts: [process.env.KEY_TESTNET!],
  gasPrice: 1500000000000000
}

const bscMainnet: NetworkUserConfig = {
  url: 'https://bsc-dataseed.binance.org/',
  chainId: 56,
  accounts: [process.env.KEY_MAINNET!],
}

const goerli: NetworkUserConfig = {
  url: 'https://rpc.ankr.com/eth_goerli',
  chainId: 5,
  accounts: [process.env.KEY_GOERLI!],
}

const eth: NetworkUserConfig = {
  url: 'https://eth.llamarpc.com',
  chainId: 1,
  accounts: [process.env.KEY_ETH!],
}
const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.6',
  },
  networks: {
    hardhat: {},
    ...(process.env.KEY_TESTNET && { pulseMainnet }),
    ...(process.env.KEY_MAINNET && { bscMainnet }),
    ...(process.env.KEY_GOERLI && { goerli }),
    ...(process.env.KEY_ETH && { eth }),
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
  paths: {
    sources: './contracts/',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
}

export default config
