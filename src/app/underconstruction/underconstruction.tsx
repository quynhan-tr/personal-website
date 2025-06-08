"use client"

import React from "react";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

export default function UnderConstruction() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center mb-2">Under construction...</h1>
        <button
          onClick={() => router.back()}
          className="px-6 py-2 font-sans border border-gray-300 rounded-full text-sm tracking-widest hover:bg-white hover:text-black transition"
        >
          Go Back
        </button>
      </main>
      <Footer />
    </div>
  );
}