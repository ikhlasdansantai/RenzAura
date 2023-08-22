import { Icon } from "@iconify/react";

interface SocialMediaProps {
  icons: string[];
}
export default function SocialMedia({ icons }: SocialMediaProps): JSX.Element {
  return (
    <div className="mt-8">
      <span className="dark:text-[#a3a3a3]">Sosial Media Kami</span>
      <div className="socialMedia flex gap-4 items-center px-3 py-4">
        {icons.map((sosmed, index) => {
          return <Icon icon={sosmed} key={index} className="text-lg icon" />;
        })}
      </div>
    </div>
  );
}
