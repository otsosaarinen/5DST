function Header() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-6xl font-bold italic underline decoration-[#4981FF] decoration-3 underline-offset-8">
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
      </div>
    </>
  );
}

export default Header;
