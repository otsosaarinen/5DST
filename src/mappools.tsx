import Header from "./Header";
import "./App.css";
import { useState } from "react";

function Mappools() {
  const [qualifier, setQualifier] = useState(false);
  const [ro32, setRo32] = useState(false);
  const [ro16, setRo16] = useState(false);
  const [quarterfinals, setQquarterfinals] = useState(false);
  const [semifinals, setSemifinals] = useState(false);
  const [finals, setfinals] = useState(false);
  const [grandfinals, setgrandfinals] = useState(false);

  return (
    <>
      <div className="font-poppins flex h-screen w-screen flex-col items-center justify-center bg-[#1E1E1E] text-white">
        <Header />
      </div>
    </>
  );
}

export default Mappools;
