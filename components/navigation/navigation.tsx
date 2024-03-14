"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import styles from "./navigation.module.css";
import { HamkkeLogo } from "@/public/assets/imgSrc";

const MainNavigation = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={HamkkeLogo} alt="Going home to hamkke" />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link
              href="/login"
              className={styles[`${pathname === "/login" && "active"}`]}
            >
              로그인
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className={styles[`${pathname === "/profile" && "active"}`]}
            >
              마이 페이지
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
