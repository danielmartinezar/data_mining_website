import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Ajusta la importación según la estructura de tu proyecto

const MemberDetails = ({ name, image, biography, onClose }) => {
  return (
    <div className="fixed top-0 pt-28  right-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
      <div className="border border-[#0032b0] rounded-2xl border-solid bg-[#74c0ff] p-8 max-w-md max-h-full overflow-y-auto relative" >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <XMarkIcon className="h-10 w-10" />
        </button>
        <img
          src={image}
          alt={name}
          className="w-full object-cover object-center mb-4"
        />
        <h2 className=" text-[#0050ff] text-xl font-semibold mb-2">{name}</h2>
        <p className="text-[#001657] mb-4">{biography}</p>
      </div>
    </div>
  );
};

export default MemberDetails;
