const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", () => {
	let Instance;
	let Token;
	let owner;

	beforeEach(async function () {
		[owner] = await ethers.getSigners();

		Instance = await ethers.getContractFactory("MyToken");
		Token = await Instance.deploy();
	});

	describe("Deployment", function () {
		it("Should set a name", async function () {
			expect(await Token.name()).to.equal("Sample Token");
		});

		it("Should set a symbol", async function () {
			expect(await Token.symbol()).to.equal("sToken");
		});

		it("Shoud set the token supply", async function () {
			expect(await Token.count()).to.equal("0");
		});
	});

	describe("Count Test", function () {
		it("Should successfully Increament", async function () {
			await Token.increaseCount();

			expect(await Token.count()).to.equal("5");
		});
		it("Should successfully Decreament", async function () {
			await Token.increaseCount();
			await Token.decreaseCount();

			expect(await Token.count()).to.equal("0");
		});
	});
});
