import React from 'react';
import Header from "../components/header.js";
import NavigationBar from "../components/navbar.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
    <NavigationBar/>
    <Header/>
    </main>
  );
}
