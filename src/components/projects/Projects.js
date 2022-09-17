import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import { projectsList } from "./projectsList";
import { useEffect, useState } from "react";

export default function Projects() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [projectCards, setProjectCards] = useState([]);

  useEffect(() => {
    const nextSlide = () => {
      if (slideIndex < projectsList.length - 1) setSlideIndex(slideIndex + 1);
      else if (slideIndex === projectsList.length - 1) setSlideIndex(0);
    };

    const prevSlide = () => {
      if (slideIndex > 0) setSlideIndex(slideIndex - 1);
      else if (slideIndex === 0) setSlideIndex(projectsList.length - 1);
    };

    setProjectCards(
      projectsList.map((project, index) => {
        return (
          <ProjectCard
            key={project.id}
            index={index}
            previewImages={project.images}
            project={project}
            name={project.name}
            description={project.description}
            code={project.code}
            link={project.link}
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        );
      })
    );
  }, [slideIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex < projectsList.length - 1) setSlideIndex(slideIndex + 1);
      else if (slideIndex === projectsList.length - 1) setSlideIndex(0);
    }, 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div id="projects">
      <h1 className={styles.gridTitle}>My Work</h1>
      <div className={styles.projectsGrid}>{projectCards}</div>
    </div>
  );
}
