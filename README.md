## MEDIVAULT :
This is a Blockchain-based Electronic health Record Storage and Retrieval System.

- Blockchain Technology with the help of **IPFS** Provides the Required Safety For Maintaining Record.

- Securely Store Your Sensitive Data Such As Health Record.

- Only Let Your Trusted Doctors To View Your Medical Records.

### <u>EASY STEPS :</u>

> ***Register Yourself :***
Register yourself to the locker, secured by blockchain technology.

> ***Authenticate Yourself :***
Log In with your credentials.

> ***Upload your Data :***
Create, update, or view your health record information.

### <u>PROBLEMS WE FACED :</u>

- Getting problems in maintaining and organizing your medical records, before consulting your Doctor.

- People usually don't go for regular checkup due to unorganised medical record which may lead to chronic disease in future.

- Missing even one prescription can lead to wrong interpretation.

- Medical records can be used to submit false insurance claims or to receive unauthorized medical treatment.

- Some individuals or organizations may sell stolen medical records on the black market for profit.

### <u>OUR SERVICES :</u>

1. ***Maintaining Medical Records :***
Keep track of your medical records, enabled by blockchain technology.

2. ***Connect With Doctors :***
Share your records with our trusted medical experts, to get a prescription.

3. ***Disease Prediction Model :***
Get a precautionary alert about diseases you might suffer from, based on our ML model.


### <u>MARKETING GOALS :</u>

> ***Offer User-Friendly Platform :***
Develop a user-friendly platform that is easy to use and understand for both patients and doctors. Offer training and support to help users get the most out of the platform, and gather feedback to continuously improve the user experience.

> ***Emphasize the Security Benefits :***
The key selling point of this technology is the increased security it provides for medical records. Emphasize the importance of having a secure and encrypted platform for storing and sharing sensitive medical information.

> ***Target Patients and Doctors :***
Identify both patients and doctors as your target audience. Patients will appreciate the ability to have control over their own medical records, while doctors will appreciate the ease and efficiency of accessing these records.

> ***Collaborate with Healthcare Providers :***
Collaborate with healthcare providers to offer a complete solution for medical record management. This will help to build credibility and demonstrate the value of your technology.

### <u>FUTURE ASPECTS :</u>

1. Doctor Treating The Patient Can Update Their Record And Prescribe Medicines.

2. User Can Directly Talk / Chat With The Doctor They Want On Our Site.

3. The System Can Be Automated To Gather Data Using The Report Uploaded By The User.

4. We Will Create a Multi-Platform Application For Better User Experience.


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




