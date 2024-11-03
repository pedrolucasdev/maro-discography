"use client";

import Albums from "./components/Albums/Albums";
import Header from "./components/Header/Header";
export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center relative flex-col overflow-hidden">
      <Header></Header>
      <Albums></Albums>
    </div>
  );
}
