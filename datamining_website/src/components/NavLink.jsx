import React from "react";

export default function Navlink({ href, title }) {
  const handleNavigation = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <li>
        <a
          href={href}
          onClick={handleNavigation}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
          {title}
        </a>
      </li>
    </div>
  );
}
