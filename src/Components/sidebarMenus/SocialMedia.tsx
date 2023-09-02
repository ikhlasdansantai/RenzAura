import { Icon } from "@iconify/react";

interface SocialMediaIcon {
  icon: string;
  path: string;
  label: string;
}
interface SocialMediaProps {
  socialMediaIcons: SocialMediaIcon[];
}
export default function SocialMedia({ socialMediaIcons }: SocialMediaProps): JSX.Element {
  return (
    <div className="mt-8">
      <span className="dark:text-[#a3a3a3]">Sosial Media Kami</span>
      <div className="socialMedia flex gap-4 items-center px-3 py-4">
        {socialMediaIcons.map((sosmed, index) => {
          return (
            <a href={sosmed.path} key={index} aria-label={sosmed.label}>
              <Icon icon={sosmed.icon} className="text-lg icon" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
