import styles from "./Projects.module.css";
import { githubSVG, previewSVG } from "../../SVGs.js";
import { projectsList } from "./projectsList";
import { useState } from "react";

export default function ProjectCard({
  index,
  previewImages,
  project,
  name,
  description,
  code,
  link,
  slideIndex,
  setSlideIndex,
  nextSlide,
  prevSlide,
}) {
  return (
    <div className={slideIndex === index ? `${styles.card} ${styles.cardActive}` : styles.card}>
      <div className={styles.dotsContainer}>
        {Array.from({ length: projectsList.length }).map((item, index) => {
          if (index === slideIndex) {
            return (
              <div
                className={`${styles.dot} ${styles.dotActive}`}
                onClick={() => {
                  console.log(project);
                  setSlideIndex(index);
                }}
              ></div>
            );
          } else {
            return <div className={styles.dot} onClick={() => setSlideIndex(index)}></div>;
          }
        })}
      </div>
      <div className={styles.imgDiv}>
        <button className={`${styles.imgButton} ${styles.prev}`} onClick={() => prevSlide()}>
          {"<"}
        </button>
        <img src={previewImages[0]} className={styles.cardImage} alt="project preview" />
        <button className={`${styles.imgButton} ${styles.next}`} onClick={() => nextSlide()}>
          {">"}
        </button>
      </div>
      <h1 className={styles.projectTitle} onClick={() => console.log(name)}>
        {name}
        <div className={styles.svgDiv}>
          {code && (
            <div className={styles.SVG} onClick={() => console.log(project.id)}>
              <a href={code} target="_blank" rel="noreferrer">
                {githubSVG}
              </a>
            </div>
          )}
          <div className={styles.SVG}>
            {" "}
            <a href={link} target="_blank" rel="noreferrer">
              {previewSVG}
            </a>
          </div>
        </div>
      </h1>
      {/* <div className={styles.projectDescription}>{description}</div> */}
    </div>
  );
}
