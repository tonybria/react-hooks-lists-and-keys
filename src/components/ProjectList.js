import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
	console.log(projects);
	return (
		<div id="projects">
			<h2>My Projects</h2>
			<div id="project-list">
				{/* < ProjectItem key={projects.id} name={projects.name} about={projects.about} technology={projects.technology}  /> */}
				{projects.map((project) => {
					return (
						<ProjectItem
							key={project.id}
							name={project.name}
							about={project.about}
							technologies={project.technologies}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default ProjectList;