import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import { projectsList } from "./projectsList";
import { useEffect, useState } from "react";

export default function Projects() {
  const [slideIndex, setSlideIndex] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
        if (slideIndex < projectsList.length - 1) setSlideIndex(slideIndex + 1);
    else if (slideIndex === projectsList.length - 1) setSlideIndex(0);
  }, 2000);
  return () => clearInterval(interval);
}, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex < projectsList.length - 1) setSlideIndex(slideIndex + 1);
    else if (slideIndex === projectsList.length - 1) setSlideIndex(0);
  };

  const prevSlide = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
    else if (slideIndex === 0) setSlideIndex(projectsList.length - 1);
  };

  return (
    <div id="projects">
      <h1 className={styles.gridTitle}>My Work</h1>
      <div className={styles.projectsGrid}>
        {projectsList.map((project, index) => {
          console.log(index);
          return (
            <ProjectCard
              index={index}
              previewImages={project.images}
              name={project.name}
              description={project.description}
              slideIndex={slideIndex}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          );
        })}
      </div>
    </div>
  );
}
