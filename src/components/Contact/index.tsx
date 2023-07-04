import { Button } from "../Button";

import styles from "./styles.module.css";

export function Contact() {
  return (
    <section className={styles.contact}>
      <div className="wrapper">
        <h2>Interested in working with me?</h2>
        <p>
          I'm active on all social media platforms listed below, but you can
          also me an email and i will get back to you within 24-48 hours.
        </p>
        <Button />
      </div>
    </section>
  );
}
