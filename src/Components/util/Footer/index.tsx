import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  type Link = {
    name: string;
    url: string;
  };
  const subLists: Array<Link> = [
    {
      name: "FAQ",
      url: "",
    },
    {
      name: "Newsletter",
      url: "",
    },
    {
      name: "Advertise",
      url: "",
    },
    {
      name: "Contact Us",
      url: "",
    },
    {
      name: "Press Kit",
      url: "",
    },
    {
      name: "Privacy",
      url: "",
    },
    {
      name: "Terms",
      url: "",
    },
  ];
  return (
    <div className="bg-gradient-fire flex flex-col items-center py-6">
      <Image src="/chainPlay_w.svg" alt="ChainPlay" width={192} height={32} />
      <div className="my-6">
        {subLists.map((link: Link, index: number) => (
          <span key={index} className="relative">
            <Link href={link.url} className={`text-white px-2 relativ`}>
              {link.name}
            </Link>
            {index !== (subLists.length - 1) && <span className="absolute inline-block w-[1px] h-5 bg-white"></span>}
          </span>
        ))}
      </div>
      <p className="text-white/50">© 2021 PlayToEarn.net - all rights reserved</p>
    </div>
  );
}
