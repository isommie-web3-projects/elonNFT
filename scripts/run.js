const {ethers} = require("hardhat");

async function main(){

  const deployNFTContract = await ethers.deployContract("ElonNFT");

  const elon = await deployNFTContract.waitForDeployment();

  console.log("Elon contract address is:", await elon.getAddress());

  console.log("Minting NFT...");
  let txn = await elon.mintNFT();
  await txn.wait();
  console.log("Yayy.. NFT minted successfully!!!");
}

main().then(() => process.exit(0))
.catch((err) => {
  console.error(err);
  process.exit(1);
})


// const hre = require("hardhat");

// async function main() {
//   console.log("Deploying Contract...");
//   const elon = await hre.ethers.deployContract("ElonNFT");
//   console.log("Contract deployed to address:", elon.target);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
// npx hardhat run scripts/run.js --network polygon_amoy
// Elon contract address is: 0xfAC2823B79Cc72FAfF53236e1276DB57FbCc7d31