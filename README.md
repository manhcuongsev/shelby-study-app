# Shelby Study App

A simple decentralized application for uploading and sharing study files (PDFs, images, notes, slides, etc.) using **Shelby** on the **Aptos** blockchain.

## Quick Start (for users / contributors)

### 1. Install Node.js + pnpm (do this once):

- Download and install **Node.js LTS** (version 18 or 20 recommended) from:  
  https://nodejs.org

- Open your terminal:
  - Windows: Command Prompt or PowerShell
  - macOS/Linux: Terminal

Install **pnpm** globally (package manager faster than npm):

```bash
npm install -g pnpm
```

### 2. Clone the repo and run (just 1 commands):

```bash
git clone https://github.com/manhcuongsev/shelby-study-app.git && cd shelby-study-app && pnpm install && pnpm dev
```

### 3. Open in your browser:
Visit:
http://localhost:3000
- On the home page → click Connect Wallet (choose Petra wallet) and connect your Aptos wallet.
- Click Upload File → to go to the upload page.
- Select a small file (e.g. PDF, JPG, PNG < 5MB for testing) → click Upload lên Shelby.

## Important note:
Shelby is currently in Early Access (testnet phase). If you see upload errors (e.g. "access denied", network issues, or transaction failure), you need to request access first:
- Visit: https://shelby.xyz  
- Or check docs: https://docs.shelby.xyz  
- Join their Discord (link usually on the site) to get approved quickly.

If you get "localhost refused to connect" or port 3000 is busyRun the dev server on a different port:

```bash 
pnpm dev -- -p 4000
```
Then open: http://localhost:4000

## Features (current version)
- Connect Aptos wallet (Petra supported)
- Upload files directly from browser to Shelby
- Display upload result (blob ID / URL – check console or UI)

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Aptos Wallet Adapter + Petra Wallet
- Shelby SDK (React hooks for upload)

## Next Steps / TODO
- Add file list / preview page
- Save metadata on-chain (Aptos Move)
- Add expiration for shared links
- Better error handling & loading states
- Deploy to Vercel for public demo

Feel free to fork, contribute, or use this as a starter template!

Questions? DM me on X: @0x_mcp

Happy building! 
