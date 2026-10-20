import { Outlet } from "react-router-dom";
import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

const MainLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
