import styles from "./About.module.css";
import weddingPhoto from "./weddingPhoto.jpg";
import { githubSVG, linkedinSVG } from "../../SVGs.js";

export default function About() {
  return (
    <div className={styles.aboutDiv}>
      <img src={weddingPhoto} alt="Add Portfolio" className={styles.portfolioImg} />
      <div>
        <h1 className={styles.name}>Ahmed Saad</h1>
        <div className={styles.textDiv}>
          <h3>About me</h3>
          <p>
            lorem impsum lorem impsum lorem impsum lorem impsumlorem impsum lorem impsum lorem impsum lorem impsum lorem
            impsum lorem impsum lorem impsum
          </p>
          <div className={styles.svgDiv}>
            <div className={styles.SVG}>{githubSVG}</div>
            <div className={styles.SVG}>{linkedinSVG}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
