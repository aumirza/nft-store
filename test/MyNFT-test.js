const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  it("Should mint and transfer an nft to someone", async function () {
    const MyNFT = await ethers.getContractFactory('MyNFT');
    const mynft = await MyNFT.deploy()
    await mynft.deployed();

    const recipient = '0xdf3e18d64bc6a983f673ab319ccae4f1a57c7097'
    const metadataURI = 'cid/test.png'

    let balance = await mynft.balanceOf()
    expect(balance).to.equal(0)

    const newlyMintedToken = await mynft.payToMint(
      recipient, metadataURI,
      { value: ethers.utils.parseEther('0.01') }
    )
  });
});
