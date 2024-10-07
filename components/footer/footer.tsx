import { FaGooglePay, FaLinkedin, FaPaypal } from "react-icons/fa";
import styles from "./footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoMastercard } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className={`${styles["footer"]} capitalize`}>
      <div className={`${styles["footer-section-1"]} flex justify-between`}>
        {/* email */}
        <div className={`${styles["section-1-part-1"]} ${styles["part"]} flex`}>
          <h4 className={`uppercase`}>Be the first to know</h4>
          <span className={`${styles["text-12-px"]}`}>
            sign up for updates from metta muse
          </span>
          <div className={`flex-items-center ${styles["form"]}`}>
            <input type="email" placeholder="Enter your email..." />
            <button className={`uppercase`}>subscribe</button>
          </div>
        </div>
        {/* contact us*/}
        <div className={`${styles["section-1-part-2"]}  flex`}>
          <div className={`${styles["part"]}`}>
            <h4 className={`uppercase`}>contact us</h4>
            <span className={`text-small ${styles["text-8-px"]}`}>
              +44 221 133 5360
            </span>
            <span className={`text-small ${styles["text-8-px"]}`}>
              customercare@mettamuse.com
            </span>
          </div>
          <div className={`${styles["part"]}`}>
            <h4 className={`uppercase`}>currency</h4>
            <div>
              <span className={`text-small`}>us logo</span>
              <span className={`text-small`}>.usd</span>
            </div>
            <span className={`text-small ${styles["text-8-px"]}`}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div
        className={`${styles["footer-section-2"]} flex justify-between text-small`}
      >
        {/* metta muse */}
        <div
          className={`text-small ${styles["section-2-part-1"]} ${styles["part"]} flex`}
        >
          <h4 className="text-bold text-large">metta muse</h4>
          <span>about us</span>
          <span>stories</span>
          <span>artisans</span>
          <span>boutiques</span>
          <span>contact us</span>
          <span>eu compliances docs</span>
        </div>
        {/* quick links */}
        <div
          className={`text-small ${styles["section-2-part-2"]} ${styles["part"]} flex`}
        >
          <h4 className={`uppercase`}>quick links</h4>
          <span>orders & shipping</span>
          <span>join/login as a seller</span>
          <span>payment & pricing</span>
          <span>returns & refunds</span>
          <span>faqs</span>
          <span>privacy policy</span>
          <span>terms & conditions</span>
        </div>
        {/* follow us */}
        <div className={`text-small ${styles["section-2-part-3"]} flex`}>
          <div className={`${styles["part"]}`}>
            <h4 className={`uppercase`}>follow us</h4>
            <div className={`flex-items-center ${styles["social"]}`}>
              <AiFillInstagram className={`${styles["text-20-px"]}`} />{" "}
              <FaLinkedin className={`${styles["text-20-px"]}`} />
            </div>
          </div>
          <div className={``}>
            <h4 className={`lowercase`}>
              metta muse <span className={`uppercase`}>accepts</span>
            </h4>
            <div className={`${styles["payments-icon"]} flex-items-center`}>
              <FaGooglePay className={`${styles["google-icon"]}`} />{" "}
              <BiLogoMastercard className={`${styles["mastercard-icon"]}`} />
              <FaPaypal className={`${styles["paypal-icon"]}`} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={`capitalize text-center ${styles["text-8-px"]}`}>
        copyright &copy; 2024 mettamuse. All rights reserved
      </div>
    </footer>
  );
};
