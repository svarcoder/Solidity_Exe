require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
	networks: {
		bscTestnet: {
			url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
			chainId: 97,
			gasPrice: 20000000000,
			accounts: [
				"2c6bd39be1c9ee930ccc15eb0e03a2396042bd8a572fcb2574ee21f3fe8fbe1b",
			],
		},
	},
	solidity: {
		version: "0.8.7",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	paths: {
		sources: "./contracts/",
		tests: "./test",
		cache: "./cache",
		artifacts: "./artifacts",
	},
	mocha: {
		timeout: 20000,
	},
	etherscan: {
		apiKey: {
			bscTestnet: "EXMEVRE6URBTGKJZJKHQ32I4HYXCUHMBIH",
		},
	},
};
