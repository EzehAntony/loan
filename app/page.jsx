import React from "react";
import styles from "./loan.module.css";
import { Ubuntu, Commissioner, Fresca } from "@next/font/google";

const ubuntu = Ubuntu({ weight: "500", subsets: ["cyrillic"] });
const commissioner = Commissioner({ weight: "400", subsets: ["cyrillic"] });
const fresca = Fresca({ weight: "400", subsets: ["latin-ext"] });

function loan() {
  return (
    <div className={styles.loan}>
      <header>
        <div className="logo">
          <h1 className={ubuntu.className}>UND SERVICES</h1>
        </div>

        <nav className={styles.mobile}>
          <ul>
            <li className={fresca.className}>overview</li>
            <li className={fresca.className}>features</li>
            <li className={fresca.className}>forums</li>
          </ul>
        </nav>
      </header>

      <div className={styles.hero}>
        <div className={styles.left}>
          <h1 className={ubuntu.className}>
            get a smarter <span>loan</span> from the comfort of your home
          </h1>
          <button>
            <p className={ubuntu.className}>Check your rate</p>
          </button>
          <div className={styles.col2}>
            <li className={commissioner.className}>Easy transparent</li>
            <li className={commissioner.className}>For personal loans</li>
            <li className={commissioner.className}>No repayment fees</li>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/man.png" alt="" />
        </div>
      </div>

      <div className={styles.apply}>
        <h2 className={ubuntu.className}>
          Apply in minutes. <br /> Money within days.
        </h2>
        <p className={ubuntu.className}>What would you like to do?</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/card-send.png" alt="" />
            <div className={styles.text}>
              <h3 className={ubuntu.className}>Pay off with credit cards</h3>
              <p className={ubuntu.className}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci at earum architecto nobis expedita. Quidem harum quam
                quae molestias rerum.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/dollar-square.png" alt="" />
            <div className={styles.text}>
              <h3 className={ubuntu.className}>Consolidate debt</h3>
              <p className={ubuntu.className}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci at earum architecto nobis expedita. Quidem harum quam
                quae molestias rerum.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/archive.png" alt="" />
            <div className={styles.text}>
              <h3 className={ubuntu.className}>Something else</h3>
              <p className={ubuntu.className}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci at earum architecto nobis expedita. Quidem harum quam
                quae molestias rerum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fair}>
        <h2 className={ubuntu.className}>
          Fair and personal loans and car refinancing
        </h2>

        <section>
          <div>
            <p className={ubuntu.className}>
              For personal loans, rates <span>are 43% lower</span> as compared
              to a credit score-only model.
            </p>
          </div>
          <div>
            <img src="/card-send.png" alt="" />
            <p className={ubuntu.className}> Easy, transparent process</p>
          </div>
          <div>
            <img src="/dollar-square.png" alt="" />
            <h2 className={ubuntu.className}>No payment fees</h2>
            <p className={ubuntu.className}>
              You may pay off part or all the loan at any time with no fee
            </p>
            <img src="z.png" className={styles.z} alt="" />
          </div>
        </section>
      </div>

      <div className={styles.services}>
        <h2 className={ubuntu.className}>Our services are fast</h2>

        <div className={styles.column1}>
          <div className={styles.left}>
            <img src="/woman.png" alt="" />
          </div>
          <div className={styles.right}>
            <h2 className={ubuntu.className}>Check your rate</h2>
            <div className={styles.group}>
              <img src="/card-send.png" alt="" />
              <p className={ubuntu.className}>
                Fill out rhe form to check your rate in minutes
              </p>
            </div>
            <div className={styles.group}>
              <img src="/dollar-square.png" alt="" />
              <p className={ubuntu.className}>Fast finds. Fast gains</p>
            </div>
            <button className={ubuntu.className}>Check your rate</button>
          </div>
        </div>

        <div className={styles.column1}>
          <div className={styles.right}>
            <h2 className={ubuntu.className}>Verify your information</h2>
            <div className={styles.group}>
              <img src="/card-send.png" alt="" />
              <p className={ubuntu.className}>
                Most browsers are instantky improved
              </p>
            </div>
            <div className={styles.group}>
              <img src="/dollar-square.png" alt="" />
              <p className={ubuntu.className}>
                Most browsers are instantky improved
              </p>
            </div>
            <div className={styles.group}>
              <img src="/dollar-square.png" alt="" />
              <p className={ubuntu.className}>
                Most browsers are instantky improved
              </p>
            </div>
          </div>

          <div className={styles.left}>
            <img src="/man2.png" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.foryou}>
        <div className={styles.inner}>
          <h2 className={ubuntu.className}>Is UND right for you?</h2>
          <p className={ubuntu.className}>
            You may pay off part or all of the loan at any time with no fee
          </p>
          <button className={ubuntu.className}>Check your rate </button>
          <img src="/z.png" alt="" />
          <img src="/z.png" alt="" />
        </div>
      </div>

      <footer>
        <h1 className={ubuntu.className}>UND SERVICES</h1>
        <div className={styles.socials}>
          <img src="/facebook.png" alt="" />
          <img src="/twitter.png" alt="" />
          <img src="/instagram.png" alt="" />
        </div>
        <ul>
          <li className={ubuntu.className}>cookies</li>
          <li className={ubuntu.className}>privacy policy</li>
          <li className={ubuntu.className}>terms of service</li>
        </ul>
      </footer>
    </div>
  );
}

export default loan;
