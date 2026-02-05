"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50">
      <div className="flex flex-col items-center gap-8 bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-black">Test UI Home</h1>

        <div className="flex flex-col gap-4 md:flex-row">
          <Link
            href="/drake"
            className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Go to /drake
          </Link>
          <Link
            href="/parameters"
            className="px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            Go to /parameters
          </Link>
        </div>
      </div>
    </div>
  );
}
