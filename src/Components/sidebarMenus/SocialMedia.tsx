import { Icon } from "@iconify/react";

interface SocialMediaProps {
  icons: string[];
}
export default function SocialMedia({ icons }: SocialMediaProps): JSX.Element {
  return (
    <div className="mt-8">
      <span className="dark:text-secondaryText">Sosial Media Kami</span>
      <div className="socialMedia flex gap-2 items-center px-3 py-4">
        {icons.map((sosmed, index) => {
          return <Icon icon={sosmed} key={index} className="text-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />;
        })}
      </div>
    </div>
  );
}
