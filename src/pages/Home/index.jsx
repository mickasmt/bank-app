import React, { useEffect } from "react";
import Hero from "components/Sections/Hero";
import Features from "components/Sections/Features";

/**
 * Home Page
 * @returns {React.ReactElement}
 */
function Home() {
  useEffect(() => {
    document.title = "Home Page | ArgentBank";
  }, []);

  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}

export default Home;
