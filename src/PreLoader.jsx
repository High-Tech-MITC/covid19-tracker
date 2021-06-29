import React from "react";

let covidQuotes = [
  "The key point that needs to be emphasised here is that human to human transmission is not rare with these types of viruses.",
  "We are seeing the mechanisms of global health security spring into action to respond to the Coronavirus; the problem is that after years of underinvestment we, as a global community, are still not prepared for a “big one”. Even strong heath systems may struggle, and where does that leave weak health systems across the global south?",
  "I think the critical thing to remember here in relation to the SARS episode in 2002-2003, with what we've recently been witnessing with the Chinese government and several cities involved in the outbreak in China, is that many years have passed, we've had many advancements in surveillance and manay global advancements in information sharing have been made since then.",
  "We also need to remember this is not the only global health emergency occurring now - Ebola continues across DRC, as does a significant Measles outbreak in that country.",
];

let random = covidQuotes[Math.floor(Math.random() * covidQuotes.length)];

const PreLoader = () => {
  return (
    <div className="loader">
      <p id="loader__text">{random}</p>
    </div>
  );
};

export default PreLoader;
