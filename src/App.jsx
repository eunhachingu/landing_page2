import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-h-screen">
      <section className="bg-center bg-no-repeat bg-cover min-h-screen bg-gradient-to-b from-slate-900 to-slate-600">
        <Navbar />
        <Hero />
      </section>
    </div>
  );
}

export default App;
