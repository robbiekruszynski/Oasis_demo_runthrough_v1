import "@oasisprotocol/sapphire-hardhat";
import { HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import './tasks/deploy';

const TEST_HDWALLET = {
    mnemonic: "test",
    paath: "m/44'/60'/0'/0",
    initalIndex: 0,
    count: 20,
    passphrase: "",
};

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : TEST_HDWALLET;

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.19',
        settings: {
            optimizer: {
                enabled: true
                 
            }
        }
    }, 
    networks: {
    hardhat: {
        chainId: 1337,
    },
    'sapphire' : {
        url:'https://sapphire.oasis.io',
        chainId: 0x5afe,
        accounts,
    },
    'sapphire-testnet': {
        url: 'https://testnet.sapphire.oasis.dev',
        chainId: 0x5aff,
        accounts,
    },
    'sapphire-localnet': {
        url: 'http://localhost:8545',
        chainId: 0x5afd,
        accounts,
    },
    }
    };

export default config;