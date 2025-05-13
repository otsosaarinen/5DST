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
      <div className="font-poppins flex h-screen w-screen flex-col items-center justify-center gap-5 bg-[#1E1E1E] text-white">
        <Header />
        <section className="w-250 bg-[#4981FF] p-3 text-3xl">
          QUALIFIERS
        </section>
        <section className="w-250 bg-[#4981FF] p-3 text-3xl">RO32</section>
        <section className="w-250 bg-[#4981FF] p-3 text-3xl">RO16</section>
        <section className="w-250 bg-[#4981FF] p-3 text-3xl">
          QUARTERFINALS
        </section>
        <section className="w-250 bg-[#4981FF] p-3 text-3xl">
          SEMIFINALS
        </section>
        <section className="w-250 bg-[#4981FF] p-3 text-3xl">FINALS</section>
        <section className="w-250 bg-[#4981FF] p-3 text-3xl">
          GRAND FINALS
        </section>
      </div>
    </>
  );
}

export default Mappools;
