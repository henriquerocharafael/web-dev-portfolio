import styles from "./styles.module.css";

export function CoFounder() {
  return (
    <section className={styles.cofounder}>
      <div className="wrapper">
        <div className={styles.text}>
          <div className={styles.col_a}>
            <h2>A co-founder at one of the world's largest communities.</h2>
            <p>
              The combined experience i have working at the top Fortune 500
              companies has allowed me to developer a skillset that helps me in
              not just development, but in every aspect of any business.
              <br />
              <br />
              I'm proud to announce that i am now working at one of the world's
              largest communities teaching young minds about how to sell
              yourself as a developer and open them to a whole new world of
              opportunities.
            </p>
          </div>

          <div className={styles.col_b}>
            <p>
              As a developer, you have everything available to you and all
              that's holding you back is yourself.
              <br />
              <br />
              A quote I live by perfectly illustrates what I mean.
              <br />
              <br />
              "How big would you dream, if you <strong>knew</strong> you
              wouldn't fail?" You've already gone through the hardest parts
              being a developer, it's time to elevate your skills and become a
              leader in something you're <i>passionate</i> about.
              <br />
              <br />
              I'm happy to chat over coffee some time about how I can help your
              company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
