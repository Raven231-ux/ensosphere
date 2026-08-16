import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen bg-ink">
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
