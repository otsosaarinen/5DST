import "./App.css";
import { useEffect, useRef } from "react";

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
          width: 854,
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
      <div className="font-poppins flex h-screen w-screen flex-col items-center justify-center gap-5 bg-[#1E1E1E] text-white">
        <h1 className="text-center text-5xl font-bold italic underline decoration-[#4981FF] decoration-3 underline-offset-8">
          <span className="text-[#4981FF]">5</span> DIGIT SUOMI TURNAUS
        </h1>
        <ul className="flex flex-row items-center justify-center gap-3">
          <li className="hover:cursor-pointer hover:underline">Discord</li>
          <img className="h-4 w-4" src="/favicon.png" alt="star" />
          <li className="hover:cursor-pointer hover:underline">Sheet</li>
          <img className="h-4 w-4" src="/favicon.png" alt="star" />
          <li className="hover:cursor-pointer hover:underline">Twitch</li>
          <img className="h-4 w-4" src="/favicon.png" alt="star" />
          <li className="hover:cursor-pointer hover:underline">Challonge</li>
        </ul>
        <section id="twitch-embed"></section>
      </div>
    </>
  );
}

export default App;
