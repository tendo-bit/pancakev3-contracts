# Pancake V3


## Deployments

2. Add Key in `.env` file. It's a private key of the account that will deploy the contracts and should be gitignored.
3. pulseMainnet `KEY_TESTNET` or bsc `KEY_MAINNET`
4. add `ETHERSCAN_API_KEY` in `.env` file. It's an API key for etherscan.
5. `yarn` in root directory
5. `NETWORK=$NETWORK yarn zx v3-deploy.mjs` where `$NETWORK` is either `eth`, `goerli`, `bscMainnet`, `pulseMainnet` or `hardhat` (for local testing)
7. `NETWORK=$NETWORK yarn zx v3-verify.mjs` where `$NETWORK` is either `eth`, `goerli`, `bscMainnet`, `pulseMainnet` or `hardhat` (for local testing)