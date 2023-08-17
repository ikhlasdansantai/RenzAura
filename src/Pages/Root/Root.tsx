import CTAButton from "../../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <CTAButton />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
}
