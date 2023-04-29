import HeadShot from "../public/static/icons/Profiles/professional.jpg"
import LinkedInLogo from "../public/static/icons/LI-In-Bug.png"
import GitHubLogo from "../public/static/icons/GitHub-Mark-120px-plus-transformed.png"
import MailLogo from "../public/static/icons/gmail-icon.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Container from "@mui/material/Container";


export default function Footer() {
    return (

        <div className="bg-slate-100 dark:bg-[#1d1d1da1] mt-4 pt-7 w-full">
            <Container maxWidth="lg">
                <div className="flex flex-row flex-wrap md:h-[300px] w-full justify-between items-center">
                    <div className="flex flex-col space-y-8">
                        <h3>Contact Me</h3>
                        <div className="space-y-1">
                            <p className="font-bold text-xl">Computer Science @ Georgia Institute of Technology</p>
                            <p>You can reach me through my LinkedIn, GitHub, or my email.</p>
                            <div className="flex flex-row space-x-3 justify-start items-center">
                                <p className="flex flex-row items-center justify-start"><LocationOnIcon />Ashburn, Virginia </p>
                                <p className="flex flex-row items-center justify-start"><LocationOnIcon />Atlanta, Georgia </p>
                            </div>
                        </div>


                        <div className="flex flex-row space-x-2">
                            <a href="https://www.linkedin.com/in/akhilesh-s/" target="_blank" className="icon"><img src={LinkedInLogo.src} /></a>
                            <a href="https://github.com/akhilesh-sivaganesan" target="_blank" className="icon"><img src={GitHubLogo.src} /></a>
                            <a href="mailto:akhilesh.sivaganesan@gmail.com" target="_blank" className="icon rounded-md overflow-hidden"><img src={MailLogo.src} /></a>
                        </div>
                    </div>
                    <img src={HeadShot.src} className="h-[200px] w-[200px] rounded-xl p-1 dotted-outline hidden md:block" />
                </div>

            </Container>
            <div className="flex flex-row items-center justify-center h-[100px] w-full">
                <p>Made by Akhilesh Sivaganesan</p>
            </div>
        </div>

    )
}