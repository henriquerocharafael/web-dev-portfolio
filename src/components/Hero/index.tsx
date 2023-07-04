import styles from "./styles.module.css";

import walmart from "../../assets/Logos/Walmart.svg";
import morgan from "../../assets/Logos/JP Morgan.svg";
import visa from "../../assets/Logos/Visa.svg";
import tinder from "../../assets/Logos/Tinder.svg";
import samsung from "../../assets/Logos/Samsung.svg";
import verizon from "../../assets/Logos/Verizon.svg";
import spense from "../../assets/Hero/Spense.png";
import yelpcamp from "../../assets/Hero/YelpCamp.png";

import { MdOutlineArrowRightAlt } from "react-icons/md";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={styles.head}>
          <h1>Helping companies build better, scalable software.</h1>
          <p>
            Award-winning web developer and author, with over 15+ years of
            working experience with Fortune 500 companies like Apple, Google,
            Facebook, and more.
          </p>
        </div>

        <div className={styles.logos}>
          <img src={walmart} />
          <img src={morgan} />
          <img src={visa} />
          <img src={tinder} />
          <img src={samsung} />
          <img src={verizon} />
        </div>

        <div className={styles.hero_img}>
          <div className={styles.column}>
            <img src={spense} />
            <div className={styles.title}>
              <h2>
                <a href="#">Spense.com</a>
              </h2>
              <MdOutlineArrowRightAlt size={30} />
            </div>
            <p>
              Rethinking the way writers get paid, an open source platform
              designed to help writers focus more on writing, and lesson when
              and how they'll get paid. Project in collaboration with
              Codewell.cc
            </p>
          </div>
          <div className={styles.column}>
            <img src={yelpcamp} />
            <div className={styles.title}>
              <h2>
                <a href="#">YelpCamp.com</a>
              </h2>
              <MdOutlineArrowRightAlt size={30} />
            </div>
            <p>
              Allowing backpack travelers to perfectly plan their trip through
              an open-source platform similar to TripAdvisor. With over !m MAU,
              YelpCamp has been the crowd's favorite in 2021.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
