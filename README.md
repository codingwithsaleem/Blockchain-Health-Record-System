### <u>TECH STACKS USED :</u>

- IPFS
- Ganache
- Solidity
- MetaMask
- React
- Tailwind CSS


### Project Setup

#### Backend Setup

1. **Navigate to Backend Project Directory:**

    Open the terminal and run the following command to install dependencies:
    ```bash
    npm install
    ```

2. **Install Ganache CLI:**

    Run the command to install Ganache CLI globally:
    ```bash
    npm install -g ganache-cli
    ```

3. **Run Ganache:**

    Execute the following command to start Ganache:
    ```bash
    npm run ganache
    ```
    This will run the script defined in your `package.json`:
    ```bash
    ganache-cli --networkId 5777 --port 8545 --gasLimit 300000000 --gasPrice 20000000000
    ```

4. **Deploy Smart Contract:**

    Open a new terminal, ensure you are in the same directory, and run:
    ```bash
    npm run deploy
    ```
    This command will execute the script `node crud.js`. After deployment, you will get `contractAddress.txt` and `contractABI.json` files. Use these files to interact with your smart contract from the frontend.

#### Frontend Setup

1. **Navigate to Frontend Repository:**

    Run the following command to install dependencies:
    ```bash
    npm install
    ```

2. **Download and Install IPFS:**

    Download IPFS from [this link](https://github.com/ipfs/ipfs-desktop/releases). Find the `.exe` file in the Assets dropdown, download and install it. After installation, run IPFS (you can search for IPFS in the start menu).

3. **Run the Project:**

    Use the following command to start your project:
    ```bash
    npm run start
    ```
    Your project will run on port 3000.

Enjoy and happy coding!




