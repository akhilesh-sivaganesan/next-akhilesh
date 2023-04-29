import imageMap from "@/pages/data/imageDict";
import thumbnailMap from "@/pages/data/thumbnail";
import { ProjectType } from "@/typings";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Project({ title, skills, description, tags, thumbnail }: ProjectType) {
    return (
        <Card className="h-full dark:bg-blue-700">
            <CardMedia
                className=""
                component="img"
                alt={title}
                image={thumbnailMap[title]}
            />
            <CardContent className="flex flex-col space-y-4 dark:bg-blue-700" >
                <div className="flex flex-row flex-wrap space-x-2 justify-start items-center">
                    {
                        tags.map((tag, index) => <p className="keyword-bubble">{tag}</p>)
                    }
                </div>
                <h4 className="text-3xl dark:text-white">{title}</h4>

                <p className="dark:text-white">{description}</p>

                <div className="flex flex-row justify-start space-x-6 items-center">
                    {skills.map((skill, index) => <div className="flex flex-col justify-center items-center">
                        <img src={imageMap[skill]} className="project-icon rounded-[50%] shadow-md" />
                        <p className="text-[gray] text-xs dark:text-white">{skill}</p>
                    </div>

                    )}
                </div>
                <div className="flex flex-row space-x-3">
                    <Button>Dummy</Button>
                    <Button>Dummy</Button>
                </div>
            </CardContent>
            {
                /*
                <Grid container spacing={1} className="">
                <Grid item xs={12} md={3} className='flex flex-row justify-center items-center'>
                    <img src={thumbnailMap[thumbnail]} className="h-full w-full" />
                </Grid>
                <Grid item xs={12} md={4} className='flex flex-col space-y-2'>
    
                    <div className="flex flex-row flex-wrap space-x-2 justify-start items-center">
                        {
                            tags.map((tag, index) => <p className="keyword-bubble">{tag}</p>)
                        }
                    </div>
                    <h4 className="text-3xl">{title}</h4>
                    
                    <p>{description}</p>
    
                    <div className="flex flex-row space-x-2 items-center">
                        {skills.map((skill, index) => <div className="flex flex-col justify-center items-center">
                            <img src={imageMap[skill]} className="project-icon rounded-[50%] shadow-md" />
                            <p className="text-[gray] text-xs dark:text-white">{skill}</p>
                        </div>
    
                        )}
                    </div>
                    <div className="flex flex-row space-x-3">
                        <Button>Dummy</Button>
                        <Button>Dummy</Button>
                    </div>
                </Grid>
            </Grid>
                */
            }
        </Card>



    )
}