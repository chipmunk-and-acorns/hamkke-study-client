import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";
import hamkkeLogo from "@/assets/hamkke_logo.png";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={hamkkeLogo} alt="Going home to hamkke" />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/login">로그인</Link>
          </li>
          <li>
            <Link href="/profile">마이 페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
