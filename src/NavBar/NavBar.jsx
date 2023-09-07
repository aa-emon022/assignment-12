"use client";
import Link from "next/link";
import { useState, React } from "react";
import { usePathname } from "next/navigation";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const pathname = usePathname();
  const [data, setData] = useState(false);

  const BarHandle = () => {
    setData(!data);
  };
  const navBarClasses = `md:absolute lg:absolute 2xl:absolute md:border-box md:h-[80px] md:w-[670px] md:left-[67px] lg:left-[60px] lg:border-box lg:w-[900px] h-[70px] xl:left-[200px] 2xl:left-[450px]  md:bg-black lg:bg-black ${style.responsive}`;
  return (
    <section className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className=" md:hidden lg:hidden left-[270px] ">
        <button onClick={BarHandle}>
          <FontAwesomeIcon className="text-[30px] " icon={faBars} />
        </button>
      </div>
      <div >
        {!data ? (
          <div className={`${!data  ? navBarClasses : 'hidden'} `}
          >
            <ul className="  md:flex lg:flex text-white  md:pl-[220px] md:gap-[20px] lg:gap-[30px] 2xl:gap-[40px] pt-[25px] lg:pl-[270px] 2xl:p ">
              <li className="hover:text-blue-400 md:ml-0 lg:ml-[20px] 2xl:ml-0  ">
                <Link
                  className={pathname === `/home` ? "text-[#FFA500]" : ""}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-400 md:ml-0 lg:ml-[20px] 2xl:ml-0">
                <Link
                  className={pathname === "/about" ? "text-[#FFA500]" : ""}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="hover:text-blue-400 md:ml-0 lg:ml-[20px] 2xl:ml-0">
                <Link
                  className={pathname === "/blog" ? "text-[#FFA500]" : ""}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="hover:text-blue-400 md:ml-0 lg:ml-[20px] 2xl:ml-0">
                <Link
                  className={pathname === "/contact" ? "text-[#FFA500]" : ""}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul>
              <li>
                <Link
                  className={pathname === `/home` ? "text-[#FFA500]" : ""}
                  href="/home"
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-400 md:ml-0 lg:ml-[20px] 2xl:ml-0">
                <Link
                  className={pathname === "/about" ? "text-[#FFA500]" : ""}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="hover:text-blue-400 md:ml-0 lg:ml-[20px] 2xl:ml-0">
                <Link
                  className={pathname === "/blog" ? "text-[#FFA500]" : ""}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="hover:text-blue-400 md:ml-0 lg:ml-[20px] 2xl:ml-0">
                <Link
                  className={pathname === "/contact" ? "text-[#FFA500]" : ""}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default NavBar;
