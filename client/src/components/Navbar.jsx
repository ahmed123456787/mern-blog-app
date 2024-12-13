import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-semibold">
        <Image src="/logo.png" width={32} height={32} />
        <span>lamalog</span>
      </Link>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "X" : "≡"}
        </div>
        {/* Mobile Link List */}
        <div
          className={`w-full h-screen flex flex-col justify-center text-lg font-semibold items-center absolute top-16 transition-all ease-in-out ${
            open ? "-right-0 gap-y-6" : "-right-[100%]"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login 👋
          </button>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
          Login 👋
        </button>
      </div>
    </div>
  );
};

export default Navbar;
