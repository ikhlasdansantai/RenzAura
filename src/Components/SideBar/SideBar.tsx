import BetaMessage from "../BetaMessage/BetaMessage";
import ProfileCard from "../ProfileCard/ProfileCard";
import SidebarMenus from "../sidebarMenus/SidebarMenus";
import SocialMedia from "../sidebarMenus/SocialMedia";
import { useState } from "react";

export default function CTAButton({ handleNavMobile, navMobileActive }: any): JSX.Element {
  const [active, isActive] = useState(false);

  interface NavMenu {
    icon: string;
    path: string;
    children: string;
  }

  const navMenus: NavMenu[] = [
    {
      icon: "fluent-mdl2:home",
      path: "/",
      children: "Beranda",
    },
    {
      icon: "solar:shop-outline",
      path: "/tentangKami",
      children: "Tentang Kami",
    },
    {
      icon: "icon-park-outline:clothes-cardigan",
      path: "/pakaian",
      children: "Pakaian",
    },
    {
      icon: "ph:bowl-food-bold",
      path: "/makanan",
      children: "Makanan",
    },
    {
      icon: "grommet-icons:brush",
      path: "/jasaMakeup",
      children: "Jasa Makeup",
    },
    {
      icon: "ph:moon-bold",
      path: "",
      children: "Dark Mode",
    },
  ];

  interface SocialMediaIcon {
    icon: string;
    path: string;
    label: string;
  }
  const socialMediaIcon: SocialMediaIcon[] = [
    {
      icon: "cib:instagram",
      path: "https//www.instagram.com/renz_aura/",
      label: "Profil Instagram RenzAura",
    },
    {
      icon: "icomoon-free:whatsapp",
      path: "https://api.whatsapp.com/send?phone=6281214553067&text=Hi, saya tertarik untuk memasarkan produk saya di website Anda. Bagaimana caranya? Terima kasih!",
      label: "Hubungi Kami Di Whatsapp",
    },
    {
      icon: "simple-icons:shopee",
      path: "https://shopee.co.id/renili",
      label: "Toko Shopee Kami",
    },
  ];

  const handleClick = (newState: boolean) => {
    isActive(newState);
  };

  return (
    <>
      <div className={`fixed ${navMobileActive ? "fixed top-0 bottom-0 left-0 right-0 " : "none"} overflow-auto shadow-md w-full bg-white dark:bg-primaryBlack z-50 sm:hidden`}>
        <nav className="flex items-center justify-between px-4 py-4 w-full">
          {!navMobileActive && <h2 className="text-xl dark:text-[#a3a3a3]">Renz Aura</h2>}
          <button
            data-drawer-target="cta-button-sidebar"
            data-drawer-toggle="cta-button-sidebar"
            aria-controls="cta-button-sidebar"
            type="button"
            className="inline-flex items-center p-2 ml-auto text-sm  relative z-50 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleNavMobile}
          >
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </nav>

        {/* Open Nav Menus ( Mobile ) */}
        {navMobileActive && (
          <aside className={`${active ? "hidden" : "block"} px-4 sm:hidden pb-8`}>
            <nav>
              <ProfileCard />
              <div className="space-y-3 flex flex-col font-medium">
                {navMenus.map((navMenu, index) => {
                  return (
                    <SidebarMenus key={index} icon={navMenu.icon} path={navMenu.path} onClick={handleNavMobile}>
                      {navMenu.children}
                    </SidebarMenus>
                  );
                })}
              </div>
            </nav>
            <SocialMedia socialMediaIcons={socialMediaIcon} />
            <BetaMessage onClick={handleNavMobile} />
          </aside>
        )}
      </div>

      <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <nav className="h-full px-4  py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ProfileCard />
          <ul className="space-y-3 flex flex-col font-medium">
            {navMenus.map((navMenu, index) => {
              return (
                <SidebarMenus key={index} icon={navMenu.icon} path={navMenu.path} onClick={handleClick}>
                  {navMenu.children}
                </SidebarMenus>
              );
            })}
          </ul>
          <SocialMedia socialMediaIcons={socialMediaIcon} />
          <BetaMessage onClick={() => {}} />
        </nav>
      </aside>
    </>
  );
}
