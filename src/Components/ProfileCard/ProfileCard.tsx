import profile from "../../assets/profile.webp";
import "./ProfileCard.css";
export default function ProfileCard() {
  return (
    <div className="relative profile-card mb-6">
      <figure className="w-28  rounded-full overflow-hidden ">
        <img src={profile} alt="profileIMG" height="100%" width="100%" className="block max-w-full" />
      </figure>
      <div className="name-bio-wrapper mt-3">
        <h2 className="text-[20px] leading-5 dark:text-white">Renz_Aura</h2>
        <span className="text-slate-600 text-[14px] dark:text-primaryText">@Renz_aura</span>
      </div>
    </div>
  );
}
