import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

task('deploy', 'Deploy our contract')
.setAction(async(args, hre:HardhatRuntimeEnvironment) => {
    const factory = await hre.ethers.getContractFactory('Test');
    const contract = await factory.deploy();
    const deployCost = contract.deploymentTransaction();
    console.log('Deployment Transaction', deployCost!.hash);

    await contract.waitForDeployment();

    console.log('Contract', await contract.getAddress() );
});