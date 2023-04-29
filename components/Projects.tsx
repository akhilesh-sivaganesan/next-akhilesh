import data from "@/pages/data/data";
import Project from "./Project";
import Button from "@mui/material/Button";
import { ProjectType, Tag } from "@/typings";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

export default function Projects() {
    const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(data.projects)
    const [currentTags, setCurrentTags] = useState<Tag[]>(["Data Science", "Web Development", "AI/ML", "Hobby"])
    function updateFilter(tags : Tag[]) {
        setCurrentTags(tags)
        setFilteredProjects(data.projects.filter(
            (p) => {
                return p.tags.filter(value => tags.includes(value)).length > 0
            }
        ))
    }
    return (
        <div id="Projects" className="section space-y-5">
            <h3>Projects</h3>
            <div className="flex flex-row md:space-x-3 flex-wrap">
                <Button variant="outlined" className={currentTags.length == 4 ? "active-button" : ""} onClick={() => updateFilter(["Web Development", "Data Science", "AI/ML", "Hobby"])}>All</Button>
                <Button variant="outlined" className={currentTags.length != 4 && currentTags.includes("Web Development") ? "active-button" : ""} onClick={() => updateFilter(["Web Development"])}>Web Development</Button>
                <Button variant="outlined" className={currentTags.length != 4 && currentTags.includes("Data Science") ? "active-button" : ""} onClick={() => updateFilter(["Data Science"])}>Data Science</Button>
                <Button variant="outlined" className={currentTags.length != 4 && currentTags.includes("AI/ML") ? "active-button" : ""}  onClick={() => updateFilter(["AI/ML"])}>AI/ML</Button>
                <Button variant="outlined" className={currentTags.length != 4 && currentTags.includes("Hobby") ? "active-button" : ""} onClick={() => updateFilter(["Hobby"])}>Hobby</Button>
            </div>
            <Grid container spacing={1}>
            {
                filteredProjects.map((project, index) => 
                <Grid item md={4}>
                    <Project key={index} {...project}/>
                </Grid>
                )
            }
            </Grid>
            
        </div>
    )
}