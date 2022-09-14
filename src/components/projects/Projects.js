import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import { projectsList } from "./projectsList";

export default function Projects() {
  return (
    <div>
      <h1 className={styles.gridTitle}>My Work</h1>
      <div className={styles.projectsGrid}>
        {projectsList.map((project) => {
          console.log(project.images);
          return <ProjectCard previewImages={project.images} name={project.name} description={project.description} />;
        })}
      </div>
    </div>
  );
}
