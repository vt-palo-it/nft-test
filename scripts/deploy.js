async function main() {
  const VT_NFT = await ethers.getContractFactory('VT_NFT');

  // Start deployment, returning a promise that resolves to a contract object
  // Contract - 0x5eA9c5261dDeae1431697DE03643db68D0c9Cb96
  const vt_NFT = await VT_NFT.deploy();
  await vt_NFT.deployed();
  console.log('Contract deployed to address:', vt_NFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
