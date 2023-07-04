import styles from "./styles.module.css";

import twitter from "../../assets/Social Icons/Twitter.svg";
import linkedin from "../../assets/Social Icons/LinkedIn.svg";
import github from "../../assets/Social Icons/Github.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.footer_container}>
          <div className="logo">Johnathan Specter</div>

          <div className={styles.social_links_container}>
            <a href="#">
              <img src={twitter} />
            </a>
            <a href="#">
              <img src={linkedin} />
            </a>
            <a href="#">
              <img src={github} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
