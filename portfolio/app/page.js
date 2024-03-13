import React from 'react';
import Header from "../components/header.js";
import NavigationBar from "../components/navbar.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
    <NavigationBar/>
    <Header/>
    </main>
  );
}
