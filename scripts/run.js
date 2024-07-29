const hre = require("hardhat");

async function main() {
  console.log("Deploying Contract...");
  const elon = await hre.ethers.deployContract("ElonNFT");
  console.log("Contract deployed to address:", elon.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
