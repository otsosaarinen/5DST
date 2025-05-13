import "./App.css";
import Header from "./Header";
import { useEffect, useRef } from "react";
import { Link } from "react-router";

function App() {
  const embedInitialized = useRef(false);

  useEffect(() => {
    if (embedInitialized.current) return;
    embedInitialized.current = true;

    const script = document.createElement("script");
    script.src = "https://embed.twitch.tv/embed/v1.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).Twitch) {
        new (window as any).Twitch.Embed("twitch-embed", {
          width: 900,
          height: 480,
          channel: "nepicktournaments",
          parent: [window.location.hostname],
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="font-poppins flex h-screen w-screen flex-col items-center justify-center gap-15 bg-[#1E1E1E] text-white">
        <Header />
        <div className="bg-[#4981FF] px-4 py-2 text-2xl font-medium">
          <Link to="/mappoolit">Paina katoaksesi uusimmat mappoolit</Link>
        </div>
        <section id="twitch-embed"></section>
      </div>
    </>
  );
}

export default App;
