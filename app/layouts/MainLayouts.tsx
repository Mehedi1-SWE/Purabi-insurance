import { Outlet } from "react-router";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Topbar from "../../components/shared/Topbar";


export default function MainLayouts() {
  return (
    <>
      <Topbar />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}