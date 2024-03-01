import React from "react";

export default function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-blue-500">
      <div className="container p-12 flex justify-between">
        <img className="w-52" alt="logo uninorte" src="./images/logoUN.png"></img>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
}
