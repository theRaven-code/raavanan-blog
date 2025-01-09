import Feed from "@/components/Feed";
import React from "react";

function Home() {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Raavanan Blog is an open-source AI prompting tool for modern world to
        discover, create and share prompts
      </p>
      <Feed />
    </section>
  );
}

export default Home;
