import { Icon } from "@iconify/react";
import "./betaStyle.css";

interface HomeCardProps {
  imgProfile: string;
  imgPost: string;
  author: string;
  date: string;
  link: string;
}

export const SosmedBeta = () => {
  return (
    <div id="sosmedBeta" className="flex w-full mx-auto justify-center  items-center gap-10">
      <Icon icon="majesticons:heart" className="text-4xl text-white hover:text-red-600" />
      <Icon icon="iconamoon:comment-fill" className="text-4xl text-white hover:text-slate-300" />
      <Icon icon="fa-solid:share" className="text-4xl text-white hover:text-slate-300" />
    </div>
  );
};

export default function HomeCard({ imgProfile, imgPost, author, date, link }: HomeCardProps): JSX.Element {
  const handleLinkTo = () => {
    return (window.location.href = link);
  };

  return (
    <div onClick={() => handleLinkTo()} className="home-card snap-end flex-shrink-0 w-full md:w-[20rem] cursor-pointer pr-4">
      <figure className="relative">
        <img src={imgPost} alt="instagramPostPict" height="100%" width="100%" className="block max-w-full" />
        <SosmedBeta />
      </figure>
      <div className="titles flex items-center gap-2 mt-2">
        <figure className="profile-car w-9 rounded-full overflow-hidden ">
          <img src={imgProfile} alt="userIMGProfile" height="100%" width="100%" className="block max-w-full" />
        </figure>
        <div className="name-bio">
          <h2 className="text-base dark:text-white">{author}</h2>
          <p className="text-slate-900 text-xs dark:text-secondText">{date}</p>
        </div>
      </div>
    </div>
  );
}
