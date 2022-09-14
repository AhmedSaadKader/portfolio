import styles from "./Projects.module.css";
import { githubSVG, previewSVG } from "../../SVGs.js";
import { projectsList } from "./projectsList";

export default function ProjectCard({ index, previewImages, name, description, slideIndex, nextSlide, prevSlide }) {
  return (
    <div className={slideIndex === index ? `${styles.card} ${styles.cardActive}` : styles.card} >
      <div className={styles.dotsContainer}>
      {Array.from({length: projectsList.length}).map((item, index) => {
        if (index === slideIndex) {
        return <div className={`${styles.dot} ${styles.dotActive}`}></div>
        } else {
        return <div className={styles.dot}></div>
        }
      })}
        {/* <div className={styles.dot}></div>
        <div className={styles.dot}></div> */}
      </div>
      <div className={styles.imgDiv}>
        <button className={`${styles.imgButton} ${styles.prev}`} onClick={() => prevSlide()}>{"<"}</button>
        <img src={previewImages[0]} className={styles.cardImage} alt="project preview" />
        <button className={`${styles.imgButton} ${styles.next}`} onClick={() => nextSlide()}>{">"}</button>
      </div>
      <h1 className={styles.projectTitle}>
        {name}
        <div className={styles.svgDiv}>
          <div className={styles.SVG}>{githubSVG}</div>
          <div className={styles.SVG}>{previewSVG}</div>
        </div>
      </h1>
      {/* <div className={styles.projectDescription}>{description}</div> */}
    </div>
  );
}
