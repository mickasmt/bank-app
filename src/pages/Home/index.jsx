import Features from "components/Sections/Features";
import Hero from "components/Sections/Hero";
import React from "react";

function Home() {
  document.title = "Argent Bank - Home Page";
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}

export default Home;
