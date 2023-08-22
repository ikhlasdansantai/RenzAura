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
      <main id="main" className={`${navMobileActive ? "hidden" : "block"} p-4 min-h-screen sm:ml-64 pt-[6rem] sm:pt-10 overflow-hidden`}>
        <Outlet />
      </main>
    </>
  );
}
