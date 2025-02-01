let Web3 = require('web3');
let Solc = require('solc');
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
const fs = require('fs');

const sourceCode = fs.readFileSync('./contracts/Cruds.sol').toString();

const input = {
    language: 'Solidity',
    sources: {
        'Cruds.sol': {
            content: sourceCode
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const compiledCode = JSON.parse(Solc.compile(JSON.stringify(input)));
const contract = compiledCode.contracts['Cruds.sol'].Cruds;

const abi = contract.abi;
const bytecode = contract.evm.bytecode.object;

const deployContract = async () => {
    const accounts = await web3.eth.getAccounts();
    const contractInstance = new web3.eth.Contract(abi);

    contractInstance.deploy({
        data: bytecode
    })
    .send({
        from: accounts[0],
        gas: 6000000  
    })
    .then((newContractInstance) => {
        console.log('Contract deployed at address:', newContractInstance.options.address);
        fs.writeFileSync('contractAddress.txt', newContractInstance.options.address);
        fs.writeFileSync('contractABI.json', JSON.stringify(abi));
    })
    .catch((error) => {
        console.error('Error deploying contract:', error);
    });
};

deployContract();