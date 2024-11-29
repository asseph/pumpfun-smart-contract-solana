# PumpFun - Solana Smart Contract Forked for Meteora

**PumpFun** is a Solana smart contract that builds upon the **Meteora** Dex protocol to implement advanced functionalities for token rewards, liquidity management, and decentralized finance mechanics. This project is designed to integrate seamlessly with the Solana ecosystem, ensuring performance, scalability, and security.

---

## 🚀 Features
- **Forked from Meteora:** Leveraging the robust Meteora foundation for optimized smart contract development.
- **Token Rewards Mechanism:** Implements dynamic reward distribution for stakers and liquidity providers.
- **Fee Management:** Includes flexible fee structures for user interactions, with potential to adapt linear or sigmoidal decay models.
- **On-chain Efficiency:** Optimized for Solana’s high-performance, low-latency blockchain.

---

## 🛠 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asseph/pumpfun-smart-contract-solana.git
   cd pumpfun-smart-contract-solana
   ```
2. Install dependencies:
   ```
    - anchor : v0.29.0
    - solana : v1.18.18
    - rustc : v1.75.0 
   ```
## 📂 Project Structure

- `programs/pumpfun`: Contains the main smart contract code.
- `tests`: Automated test scripts for contract functionality.
- `migrations`: Deployment scripts for managing updates.
- `scripts`: Useful utilities for interacting with the contract.

## 🔧 Configuration

- Update the `Anchor.toml` file to set your Solana cluster (e.g., Devnet or Mainnet) and wallet details:

   ```
    [provider]
    cluster = "https://api.devnet.solana.com"
    wallet = "~/.config/solana/id.json"
   ```
- Ensure you have Solana CLI installed and configured:
   ```
    solana config set --url https://api.devnet.solana.com
   ```

## 📜 Usage
- Interact with the smart contract: Use the provided scripts or integrate with a frontend to interact with the PumpFun smart contract.
- Testing: Run unit tests to validate the functionality 
- Deploy to Mainnet: Ensure all tests pass, and then update the deployment configuration to target the mainnet cluster.

## 🤝 Proof of work & Collaboration

CA: [`DkgjYaaXrunwvqWT3JmJb29BMbmet7mWUifQeMQLSEQH`](https://solscan.io/account/DkgjYaaXrunwvqWT3JmJb29BMbmet7mWUifQeMQLSEQH?cluster=devnet)

Meteora Migration Tx: [`4xuL6UqNHU7DRtTvCA5S8bbunTs7k8KF7zAJiegdG2Ngujafz6CdJEZLQ3VQKX942Hp7Eb4gxXGwDLjHb4STzCCS`](https://solscan.io/tx/4xuL6UqNHU7DRtTvCA5S8bbunTs7k8KF7zAJiegdG2Ngujafz6CdJEZLQ3VQKX942Hp7Eb4gxXGwDLjHb4STzCCS?cluster=devnet)


For questions, need help, or feedback, please reach out via Email : davidkano.dk@gmail.com or Telegram: [asspeh_1994](https://t.me/asspeh_1994)





