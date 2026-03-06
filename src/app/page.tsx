import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Shelby Study App</h1>
      <p className="text-xl mb-4">Decentralized storage and sharing of learning files on Shelby (Aptos)</p>
      <Link href="/upload" className="bg-blue-500 text-white px-6 py-3 rounded-lg">
        Go to Upload
      </Link>
    </main>
  );
}