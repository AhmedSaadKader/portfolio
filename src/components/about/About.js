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
          <p>Self-taught full stack web developper based in Cairo.</p>
          <p
            onClick={() => {
              const anchor = document.querySelector("#projects");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Check some of my work <i>below</i>.
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
