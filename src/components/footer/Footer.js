import styles from "./Footer.module.css";
import { githubSVG, linkedinSVG, addressSVG, phoneSVG, emailSVG } from "../../SVGs.js";

export default function Footer() {
  return (
    <footer className={styles.footerDiv}>
      <div className={styles.contactMe}>Contact me</div>
      <div className={styles.invite}>Please get in touch if you think our work could be mutually benefecial!</div>
      <div className={styles.address}>
        {" "}
        <div className={styles.infoSVG}>{addressSVG}</div>
        49C Ebad El-Rahman compound, Ring-Road, Cairo, Egypt
      </div>
      <div className={styles.phone}>
        {" "}
        <div className={styles.infoSVG}>{phoneSVG}</div>
        002 0122 861 0 168
      </div>
      <div className={styles.email}>
        {" "}
        <div className={styles.infoSVG}>{emailSVG}</div>
        ahmed.saad.kader@gmail.com
      </div>
      <div className={styles.svgDiv}>
        <div className={styles.SVG}>
          <a href="https://github.com/AhmedSaadKader" target="_blank" rel="noreferrer">
            {githubSVG}
          </a>
        </div>
        <div className={styles.SVG}>
          <a href="https://www.linkedin.com/in/ahmed-saad-60856892/" target="_blank" rel="noreferrer">
            {linkedinSVG}{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
