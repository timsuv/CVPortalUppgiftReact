import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const toggleBurger = () => {
    setVisible(!visible);
  };

  return (
    <>
      <NavLink to="/" className="logo">
        <span>Tim</span>
      </NavLink>
      <nav className="navigationDesktop">
        <ul className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About me</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
      <div className="mobile">
        <button
          onClick={toggleBurger}
          id="toggleBurger"
          className="toggleBurger"
        >
          <div className="burgerSpan"></div>
          <div className="burgerSpan"></div>
          <div className="burgerSpan"></div>
        </button>
        <nav className={visible ? "visibleburger" : "burgerNav"}>
          <ul className="burgerList">
            <NavLink to="/" onClick={() => setVisible(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setVisible(false)}>About me</NavLink>
            <NavLink to="/portfolio"onClick={() => setVisible(false)}>Portfolio</NavLink>
            <NavLink to="/cv" onClick={() => setVisible(false)}>CV</NavLink>
            <NavLink to="/contact" onClick={() => setVisible(false)}>Contact</NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};
