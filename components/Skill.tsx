import Grid from "@mui/material/Grid";
import SkillArea from "./SkillArea";
import data from "@/pages/data/data";

export default function Skill() {
    return (
        <div className="w-full min-h-[100vh] section" id='Skills'>
            <h3>Skills</h3>
            <Grid container spacing={2} className="my-3">
                <Grid item xs={12} md={5} className=''>
                    <SkillArea {...data.webdev} />
                </Grid>
                <Grid item xs={12} md={5} className=''>
                    <SkillArea {...data.datasci} />
                </Grid>
                <Grid item xs={12} md={5} className=''>
                    <SkillArea {...data.ai} />
                </Grid>
                <Grid item xs={12} md={5} className=''>
                    <SkillArea {...data.tech}/>
                </Grid>
            </Grid>
        </div>
    )
}