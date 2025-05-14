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
                    channel: "nepicktournaments",
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
            <div className="font-poppins flex min-h-screen max-w-screen flex-col items-center justify-center gap-10 bg-[#1E1E1E] py-15 text-white">
                <Header />
                <section className="w-180 text-center text-xl">
                    5DST3 (5 Digit Suomi Turnaus) on suomalainen osu!standard
                    turnaus. Turnaukseen voivat osallistua kaikki suomalaiset
                    pelaajat rank välillä #10,000 - #99,999. Turnauksen
                    järjestävät Pickxarro ja Nev-. Tutustu turnaukseen alla
                    olevien linkkien kautta.
                </section>
                <div className="flex flex-row gap-5">
                    <div className="bg-[#4981FF] px-4 py-2 text-center text-2xl font-medium transition-all duration-200 ease-in hover:bg-white hover:text-[#1E1E1E]">
                        <Link to="/mappoolit">Mappoolit</Link>
                    </div>
                    <div className="bg-[#4981FF] px-4 py-2 text-center text-2xl font-medium transition-all duration-200 ease-in hover:bg-white hover:text-[#1E1E1E]">
                        <Link to="/aikataulu">Aikataulu</Link>
                    </div>
                    <div className="bg-[#4981FF] px-4 py-2 text-center text-2xl font-medium transition-all duration-200 ease-in hover:bg-white hover:text-[#1E1E1E]">
                        <Link to="https://docs.google.com/document/d/1dMhobggW53QaZDkMrQp4XrmGJzt8jXPt7OQfomySMW8/edit?tab=t.0">
                            Säännöt
                        </Link>
                    </div>
                </div>
                <section className="" id="twitch-embed"></section>
            </div>
        </>
    );
}

export default App;
