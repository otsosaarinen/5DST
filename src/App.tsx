import "./App.css";
import Header from "./Header";
import { useEffect, useRef } from "react";
import { Link } from "react-router";

declare global {
  interface Window {
    Twitch: any;
  }
}

function App() {
  const embedInitialized = useRef(false);

  useEffect(() => {
    if (embedInitialized.current) return;
    embedInitialized.current = true;

    const script = document.createElement("script");
    script.src = "https://player.twitch.tv/js/embed/v1.js";
    script.async = true;

    script.onload = () => {
      if (window.Twitch && window.Twitch.Embed) {
        new window.Twitch.Embed("twitch-embed", {
          width: 900,
          height: 480,
          channel: "flyingtuna",
          // Use your domain or localhost for local dev
          parent: [window.location.hostname],
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup optional (removes embed on unmount)
    return () => {
      const embed = document.getElementById("twitch-embed");
      if (embed) {
        embed.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <div className="font-poppins flex h-screen w-screen flex-col items-center justify-center gap-15 bg-[#1E1E1E] text-white">
        <Header />
        <div className="bg-[#4981FF] px-4 py-2 text-center text-2xl font-medium transition-all duration-200 ease-in hover:bg-white hover:text-[#4981FF]">
          <Link to="/mappoolit">Paina katoaksesi uusimmat mappoolit</Link>
        </div>
        <section className="" id="twitch-embed"></section>
      </div>
    </>
  );
}

export default App;
