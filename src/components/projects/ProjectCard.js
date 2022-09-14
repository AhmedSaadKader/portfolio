import styles from "./Projects.module.css";
import imgPlaceholder from "../about/imagePlaceholder.png";
import { githubSVG, previewSVG } from "../../SVGs.js";

export default function ProjectCard({ previewImages, name, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <button className={styles.imgButton}>{"<"}</button>
        <img src={previewImages[0]} className={styles.cardImage} alt="project preview" />
        <button className={styles.imgButton}>{">"}</button>
      </div>
      <div className={styles.projectTitle}>
        {name}
        <div className={styles.svgDiv}>
          <div className={styles.SVG}>{githubSVG}</div>
          <div className={styles.SVG}>{previewSVG}</div>
        </div>
      </div>
      <div className={styles.projectDescription}>{description}</div>
    </div>
  );
}
