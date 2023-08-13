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
          <p>Self-taught full stack web developper and pharmacist based in Cairo.</p>
          <p>
            My stack includes HTML, CSS, JavaScript, Typescript, React, NodeJs, Express, Postgresql, MongoDb and
            Firebase
          </p>
          <p
            onClick={() => {
              const anchor = document.querySelector("#projects");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className={styles.clickForProjects}
          >
            Check some of my work <i>below</i>.
          </p>
          <div className={styles.svgDiv}>
            <div className={styles.SVG}>
              <a href="https://github.com/AhmedSaadKader" target="_blank" rel="noreferrer">
                {githubSVG}
              </a>
            </div>
            <div className={styles.SVG}>
              <a href="https://www.linkedin.com/in/ahmed-saad-29b755269/" target="_blank" rel="noreferrer">
                {linkedinSVG}{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
