"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Nav = () => {
  const navStyle =
    "relative px-5 opacity-70 hover:opacity-100 hover:font-bold hover:bg-white hover:text-black h-full flex justify-center items-center transition-all ease-in-out duration-300";
  const navStyleSelected =
    "after:blo ck after:absolute after:border-b-4 after:w-full after:border-red-500 after:bottom-0";
  // const router = useRouter();
  const pathName = usePathname();

  const navItem = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/About",
    },
    {
      label: "Work",
      path: "/Work",
    },
    {
      label: "Contact",
      path: "/Contact",
    },
  ];

  return (
    <div className="absolute bg-black top-0 left-20 shadow-md bg-opacity-60 h-[60px] flex justify-center w-[900px] rounded-b-lg z-10">
      <h1 className="top-10 text-3xl text-white font-black flex justify-center self-center mr-10">
        My Portfolio
      </h1>
      <nav className="text-white text-2xl flex justify-center items-center">
        {navItem.map((item) => (
          <>
            <Link
              className={`${navStyle} ${
                pathName === item.path && navStyleSelected
              }`}
              href={item.path}
            >
              {item.label}
            </Link>{" "}
            |
          </>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
