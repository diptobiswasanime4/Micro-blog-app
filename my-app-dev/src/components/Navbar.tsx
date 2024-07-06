import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between bg-yellow-500 px-4 py-2 text-xl">
      <div className="hover:opacity-75 cursor-pointer">Home</div>
      <div className="hover:opacity-75 cursor-pointer">Public</div>
      <div className="hover:opacity-75 cursor-pointer">Private</div>
      <input className="rounded pl-1" type="text" placeholder="Search bar" />
      <div className="hover:opacity-75 cursor-pointer">My Account</div>
    </nav>
  );
}

export default Navbar;
