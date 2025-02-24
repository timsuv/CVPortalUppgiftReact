import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import EasterEgg from "../components/EasterEgg";

const Layout = () => {
  return (
    <>
    <EasterEgg />
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
