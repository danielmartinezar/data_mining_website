import React from "react";
export default function MemberCard({
  imgURL,
  name,
  biography,
  handleCardClick,
}) {
  const shortenBiography = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };
  return (
    <div
      className="border border-[#0032b0] rounded-2xl border-solid bg-[#74c0ff] overflow-hidden transition-transform transform-gpu hover:shadow-lg hover:-translate-y-1 hover:scale-105"
      onClick={handleCardClick}
    >
      <div
        className="h-96 md:h-72 relative group transition-transform transform-gpu hover:translate-y-1"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-[#0050ff] rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold">{name}</h5>
        <p className="text-[#001657] mb-2">
          {shortenBiography(biography, 100)}
        </p>
      </div>
    </div>
  );
}
