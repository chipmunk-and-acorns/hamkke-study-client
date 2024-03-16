"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import styles from "./navigation.module.css";
import { HamkkeLogo } from "@/public/assets/imgSrc";

/**
 * 로그인
 * - 새 글 쓰기
 * - 프로필 사진 메뉴
 *
 * 비로그인
 * - 새 글 쓰기
 * - 로그인
 */
const MainNavigation = () => {
  const pathname = usePathname();
  const [isLogin, setIsLogin] = useState(true);

  const renderNavigation = (isLogin: boolean) => {
    if (isLogin) {
      return (
        <>
          <li>
            <Link
              href="/post-write"
              className={styles[`${pathname === "/post-write" && "active"}`]}
            >
              새 글 쓰기
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
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={HamkkeLogo} alt="Going home to hamkke" />
      </Link>
      {/* Menu Item으로 변경, Avatar 추가(add dropdown menu) */}
      <nav className={styles.nav}>
        <ul>{renderNavigation(isLogin)}</ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
