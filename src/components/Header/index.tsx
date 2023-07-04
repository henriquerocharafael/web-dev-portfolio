import { Button } from "../Button";

import styles from "../Header/styles.module.css";

import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">Johnathan Specter</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Chats</a>
          </li>
          <li>
            <a href="#">Awards</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <Button className={styles.button} />
      <GiHamburgerMenu className={styles.hamburger} size={30} />
    </header>
  );
}
