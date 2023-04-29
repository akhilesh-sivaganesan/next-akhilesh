import Button from '@mui/material/Button'
import Grid from "@mui/material/Grid"
import JSConfetti from 'js-confetti'
import GTLogo from "../public/static/icons/GT-logo.jpg"
import AWSLogo from "../public/static/icons/gradient-aws.png"
import VueCircle from "../public/static/icons/vuecircle.png"
import Portrait from "../public/static/icons/Profiles/IMG_1344.jpg"
import StackOverflowLogo from "../public/static/icons/stackoverflow.png"
import NextLogo from "../public/static/icons/nextjs.png"
export default function Hero() {
    function showConfetti() {
        const confetti = new JSConfetti()
        confetti.addConfetti({
            confettiColors: [
                '#011f4b', '#03396c', '#005b96', '#6497b1', '#b3cde0'
            ],
        })
    }
    return (
        <div className='flex flex-row items-center justify-center min-h-[100vh]'>
            <Grid container spacing={2} >
                <Grid item xs={12} md={8} className='flex flex-col justify-center items-start space-y-7'>
                    <h1>Hello</h1>
                    <div className='flex flex-col space-y-4'>
                        <h3 className='mt-[-50px]'>I am Akhilesh Sivaganesan</h3>
                        <p className='max-w-[650px] text-xl'>I love web development and interesting applications of artificial intelligence and data science. 3rd Year <a className="text-blue-600 underline" href="https://www.cc.gatech.edu/" target="_blank">CS Student at Georgia Tech</a>. Based in Ashburn, Virginia.</p>
                    </div>
                    <div className="flex flex-row space-x-3 justify-start items-center">
                        <Button className="yellow" variant="outlined" href="#Skills">Skills</Button>
                        <Button className="yellow" variant="outlined" href="#Internships">Internships</Button>
                        <Button className="yellow" variant="outlined" href="#Projects">Projects</Button>
                        <Button className="yellow" variant="outlined" onClick={() => showConfetti()}>🎉</Button>
                    </div>

                </Grid>
                <Grid item xs={0} md={4} className='relative'>
                    <div className="images">
                        <a href="https://www.cc.gatech.edu/" target="_blank"><img className="img1" src={GTLogo.src} /></a>
                        <a href="https://www.credly.com/badges/05b1dc7f-de76-43b1-84b1-7e13d143b489/public_url" target="_blank"><img className="img2" src={AWSLogo.src} /></a>
                        <a href="https://vuejs.org/" target="_blank"><img className="img3" src={VueCircle.src} alt="Vue.js" /></a>
                        <a href="https://www.linkedin.com/in/akhilesh-s/" target="_blank"><img className="img4" src={Portrait.src} alt="Akhilesh Sivaganesan" /></a>
                        <a href="https://stackoverflow.com/" target="_blank"><img className="img5" src={NextLogo.src} alt="Next.js" /></a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}