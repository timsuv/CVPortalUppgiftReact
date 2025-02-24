import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const toggleBurger = () => {
    setVisible(!visible);
  };
  const changeBodyColor = (e: React.MouseEvent) => {
    e.preventDefault();
    document.body.style.backgroundColor = "lightblue";
  };




  return (
    <>
      <div className="logo" onClick={changeBodyColor}>
        <span>Tim</span>
      </div>
      <nav className="navigationDesktop">
        <ul className="links">
          <NavLink to="/CVPortalUppgiftReact/">Home</NavLink>
          <NavLink to="/CVPortalUppgiftReact/about">About me</NavLink>
          <NavLink to="/CVPortalUppgiftReact/portfolio">Portfolio</NavLink>
          <NavLink to="/CVPortalUppgiftReact/cv">CV</NavLink>
          <NavLink to="/CVPortalUppgiftReact/contact">Contact</NavLink>
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
            <NavLink to="/CVPortalUppgiftReact/" onClick={() => setVisible(false)}>Home</NavLink>
            <NavLink to="/CVPortalUppgiftReact/about" onClick={() => setVisible(false)}>About me</NavLink>
            <NavLink to="/CVPortalUppgiftReact/portfolio"onClick={() => setVisible(false)}>Portfolio</NavLink>
            <NavLink to="/CVPortalUppgiftReact/cv" onClick={() => setVisible(false)}>CV</NavLink>
            <NavLink to="/CVPortalUppgiftReact/contact" onClick={() => setVisible(false)}>Contact</NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};
