import { SkillAreaType } from "@/typings";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageMap from "@/pages/data/imageDict";
import thumbnailMap from "@/pages/data/thumbnail";

export default function SkillArea({ title, skills, keywords }: SkillAreaType) {
    return (
        <div>
            <Card >
                <CardMedia
                    className="h-[130px]"
                    component="img"
                    alt={title}
                    image={thumbnailMap[title]}
                />
                <CardContent className="flex flex-col space-y-4 dark:bg-blue-700" sx={{height: 220}}>
                    <h4 className="text-3xl dark:text-white">{title}</h4>
                    
                    <div className="flex flex-row flex-wrap space-x-2 justify-start items-center">
                        {
                            keywords.map((keyword, index) => <p className="keyword-bubble">{keyword}</p>)
                        }
                    </div>
                    <Typography variant="body2" color="text.secondary" className="flex flex-row flex-wrap space-x-4">
                        {
                            skills.map((skill, index) =>
                                <div className="flex flex-col items-center space-y-1">
                                    <img className="h-[50px] w-[50px] rounded-[50%] shadow-md" src={imageMap[skill]} />
                                    <p className="dark:text-white">{skill}</p>
                                </div>)
                        }
                    </Typography>
                </CardContent>
            </Card>


        </div>
    )
}