"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { SliderWrapper } from "@/sub-components/slider-wrapper/slider-wrapper";
import { BiChevronRight } from "react-icons/bi";

const SideBar: React.FC = () => {
  return (
    <div className={`${styles["side-bar"]}`}>
      <div className={`uppercase border-t border-b flex ${styles["links"]}`}>
        <h4 className={`capitalize`}>Links</h4>
        {[
          { name: "shop", href: "/shop" },
          { name: "skills", href: "/skills" },
          { name: "stories", href: "/stories" },
          { name: "about", href: "/about" },
          { name: "contact us", href: "/contact-us" },
        ].map(({ name, href }) => (
          <Link key={name} href={href} className={`text-smaller`}>
            {name}
          </Link>
        ))}
      </div>
      {["profile", "cart"].map((name) => (
        <div key={name} className={`border-t border-b flex justify-between`}>
          <h4>{name}</h4>
          <BiChevronRight className={`text-larger`} />
        </div>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <nav className={`${styles["navbar"]}`}>
      <SliderWrapper
        heading="Home"
        setOpen={setSideBarOpen}
        open={sideBarOpen}
        Child={SideBar}
      />
      <div
        className={`flex-items-center justify-between ${styles["logo-bar"]}`}
      >
        <div className={`flex-items-center`}>
          <GiHamburgerMenu
            className={`${styles["hamburger-icon"]}`}
            onClick={() => setSideBarOpen(true)}
          />

          <FaReact className={`text-bolder ${styles["main-icon"]}`} />
        </div>
        <h2 className={`uppercase`}>Logo</h2>
        <div className={`flex-items-center ${styles["nav-icon-container"]}`}>
          <span>
            <CiSearch className={`${styles["nav-icon"]}`} />
          </span>
          <span>
            <GoHeart className={styles["nav-icon"]} />
          </span>
          <span>
            <PiHandbagSimpleLight className={styles["nav-icon"]} />
          </span>
          <span>
            <FiUser
              className={`${styles["nav-icon"]} ${styles["user-icon"]}`}
            />
          </span>
          <select name="" id="" className="text-bolder text-smaller uppercase">
            <option value="Eng">Eng</option>
          </select>
        </div>
      </div>
      <div
        className={`flex-items-center flex-justify-center uppercase text-bold ${styles["links-bar"]} text-small text-bolder`}
      >
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/skills"}>skills</Link>
        <Link href={"/stories"}>stories</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/contact us"}>contact us</Link>
      </div>
    </nav>
  );
};
