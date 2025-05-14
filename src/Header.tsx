import { Link } from "react-router";

function Header() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-center text-6xl font-bold italic underline decoration-[#4981FF] decoration-3 underline-offset-8">
                    <span className="text-[#4981FF]">5</span> DIGIT SUOMI
                    TURNAUS
                </h1>
                <ul className="text-md flex flex-row items-center justify-center gap-3">
                    <li className="hover:cursor-pointer hover:underline">
                        <Link to="https://discord.gg/umRTqmwaTg">Discord</Link>
                    </li>
                    <img className="h-4 w-4" src="/favicon.png" alt="star" />
                    <li className="hover:cursor-pointer hover:underline">
                        <Link to="https://docs.google.com/spreadsheets/d/1wnQdsWv7b2bA7r5lS94oV7LDhdF8OkxM1YhU8uSU2KU/edit?usp=sharing">
                            Sheet
                        </Link>
                    </li>
                    <img className="h-4 w-4" src="/favicon.png" alt="star" />
                    <li className="hover:cursor-pointer hover:underline">
                        <Link to="https://www.twitch.tv/nepicktournaments">
                            Twitch
                        </Link>
                    </li>
                    <img className="h-4 w-4" src="/favicon.png" alt="star" />
                    <li className="hover:cursor-pointer hover:underline">
                        <Link to="">Challonge</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
