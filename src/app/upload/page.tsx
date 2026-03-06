"use client";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState } from "react";
// Assume Shelby SDK has hooks; otherwise, use SDK core and sign transactions manually
// import { useUploadBlobs } from "@shelby-protocol/react"; // If available

export default function UploadPage() {
  const { account, connected, signAndSubmitTransaction } = useWallet();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  // Fake useUploadBlobs if the SDK doesn't already have it; adjust according to Shelby's documentation.
  const handleUpload = async () => {
    if (!file || !connected || !account) return alert("Kết nối ví và chọn file trước!");

    setUploading(true);
    try {
      // For example, using the Shelby/Aptos core SDK (assumed).
      // Import need: import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
      // const aptosConfig = new AptosConfig({ network: "devnet" }); // Or ShelbyNet
      // const aptos = new Aptos(aptosConfig);

      // Assumption flow: Generate commitment, submit tx
      // const blobData = await file.arrayBuffer(); // Read file
      // const commitment = generateBlobCommitment(blobData); // From Shelby SDK

      // Transaction payload (Follow docs Shelby)
      const transaction = {
        function: "shelby::blob::upload_blob", // Module assumption
        typeArguments: [],
        arguments: [file.name, new Uint8Array(await file.arrayBuffer()), 3600 * 24 * 7], // name, data, expire seconds (7 days)
      };

      const response = await signAndSubmitTransaction(transaction);
      await response; // Wait confirmation

      // Assuming blob ID from response
      const blobId = "fake-blob-id-from-tx"; // Replace with parse from response
      const publicUrl = `https://rpc.shelby.xyz/blob/${blobId}`;
      setBlobUrl(publicUrl);
      alert("Upload successful! Link: " + publicUrl);
    } catch (err) {
      console.error(err);
      alert("Error: " + (err as Error).message);
    }
    setUploading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Upload Study Materials</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        disabled={uploading || !file || !connected}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Uploading to Shelby""}
      </button>
      {!connected && <p className="mt-4 text-red-500">Please connect your Petra wallet!</p>}
      {blobUrl && (
        <div className="mt-8">
          <p>Share link: <a href={blobUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{blobUrl}</a></p>
        </div>
      )}
    </div>
  );
}