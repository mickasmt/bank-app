import React from "react";
import Hero from "components/Sections/Hero";
import Features from "components/Sections/Features";

/**
 * Home Page
 * @returns {React.ReactElement}
 */
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
