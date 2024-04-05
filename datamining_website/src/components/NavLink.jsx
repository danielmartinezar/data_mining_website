import React from "react";

export default function Navlink({ href, title }) {
  return (
    <div>
      <li>
        <a
          href={href}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
          {title}
        </a>
      </li>
    </div>
  );
}
