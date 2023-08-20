import CTAButton from "../../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Root() {
  const [navMobileActive, setNavMobileActive] = useState(false);

  const handleNavMobile = () => {
    setNavMobileActive((navMobileActive) => !navMobileActive);
  };

  return (
    <>
      <CTAButton handleNavMobile={handleNavMobile} navMobileActive={navMobileActive} />
      <main id="main" className={`p-4 sm:ml-64 ${navMobileActive ? "hidden" : ""}`}>
        <Outlet />
      </main>
    </>
  );
}
