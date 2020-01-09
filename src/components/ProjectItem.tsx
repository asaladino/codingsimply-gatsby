import React from "react";
import ProjectIcon from "./ProjectIcon";
import _ from "lodash";
import ProjectModel from "../models/ProjectModel";
import { Link } from "gatsby";

interface Props {
    project: ProjectModel;
}

const ProjectItem = (props: Props) => {
    const { project } = props;
    return <div className={`animated zoomIn`} style={{ animationDelay: _.random(200, 600) + "ms" }}>
        <div className="large-3 medium-3 small-6 columns">
            <div className="callout text-center no-border project-item">
                <Link to={project.getSlug()}>
                    {project.hasIcon() ?
                        <img alt={project.getTitle()} src={project.getIconUrl()} /> :
                        <ProjectIcon initials={project.getInitials()} />}
                    <strong>{project.getTitle()}</strong>
                </Link>
            </div>
        </div>
    </div>
}

export default ProjectItem;
