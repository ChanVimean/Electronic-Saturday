import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6">
        <section>
          <img src="logo.png" alt="logo" className="h-16" />
        </section>

        <section className="hidden lg:block space-x-6 font-semibold text-xl">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/contact">Contact</Link>
        </section>

        <section className="flex items-center gap-2 font-medium text-lg">
          <h2>Tony Stark</h2>
          <img
            src="profile.webp"
            alt="profile"
            className="h-12 rounded-full overflow-hidden"
          />
          <button>theme</button>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
