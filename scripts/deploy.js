// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   await lock.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// // const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// // const JAN_1ST_2030 = 1893456000;
// // const ONE_GWEI = 1_000_000_000n;

// // module.exports = buildModule("LockModule", (m) => {
// //   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
// //   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

// //   const lock = m.contract("Lock", [unlockTime], {
// //     value: lockedAmount,
// //   });

// //   return { lock };
// // });