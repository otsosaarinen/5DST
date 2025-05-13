import "./App.css";

function App() {
  return (
    <>
      <div className="font-poppins flex h-screen w-screen flex-col items-center justify-center gap-5 bg-[#1E1E1E] text-white">
        <h1 className="text-5xl font-bold italic underline decoration-[#4981FF] decoration-3 underline-offset-8">
          <span className="text-[#4981FF]">5</span> DIGIT SUOMI TURNAUS
        </h1>
        <ul className="flex flex-row gap-5">
          <li className="hover:cursor-pointer hover:underline">Discord</li>
          <li className="hover:cursor-pointer hover:underline">Sheet</li>
          <li className="hover:cursor-pointer hover:underline">Twitch</li>
          <li className="hover:cursor-pointer hover:underline">Challonge</li>
        </ul>
      </div>
    </>
  );
}

export default App;
