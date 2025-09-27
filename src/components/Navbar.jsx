import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex">
      <section>
        <img src="logo.png" alt="logo" className="h-16" />
      </section>

      <section>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
      </section>

      <section>
        <img src="profile.webp" alt="profile" className="h-16 rounded-full overflow-hidden" />
      </section>
    </nav>
  );
};

export default Navbar;
