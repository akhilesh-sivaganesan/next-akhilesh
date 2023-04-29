import thumbnailMap from "@/pages/data/thumbnail";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Internships() {
    return (
        <div className="space-y-4 section" id="Internships">
            <h3>Professional Experience</h3>
            <Button href="https://drive.google.com/file/d/1opfOX4ttDBmD_3bHUepeXD-ZzJDqFEQC/view?usp=sharing" target="_blank" className="yellow">View my resume</Button>
            <div className="flex flex-row flex-wrap">
            <div className="relative space-x-3 h-[250px] w-[540px] m-2">
                <img src={thumbnailMap["LM"]} className="absolute h-[120px] w-[120px] md:h-[200px] md:w-[200px] rounded-md z-10 top-[60px] md:top-[30px] shadow-lg" />
                <div className="absolute left-[50px] bg-gradient-to-r dark:from-cyan-500 dark:to-blue-800 bg-blue-200 md:w-[460px] h-full pl-[70px] md:pl-[150px] md:pr-[50px] pr-[20px] shadow-md rounded-md">
                    <div className="flex flex-col justify-center items-left h-full ml-4">
                        <p className="text-sm">May 2023 - Present</p>
                        <h4 className="text-3xl">Lockheed Martin</h4>
                        <p className="font-bold">Software Engineering Intern</p>
                        <p className="mt-[10px] md:w-[250px]">Working with React.js and AWS on digital manufacturing project.</p>
                    </div>
                </div>
            </div>

            <div className="relative space-x-3 h-[250px] w-[540px] m-2">
                <img src={thumbnailMap["Mentra"]} className="absolute h-[120px] w-[120px] md:h-[200px] md:w-[200px] rounded-md z-10 top-[60px] md:top-[30px] shadow-lg" />
                <div className="absolute left-[50px] bg-gradient-to-r dark:from-cyan-500  dark:to-blue-800 bg-blue-200 md:w-[460px] h-full pl-[70px] md:pl-[150px] md:pr-[50px] pr-[20px] shadow-md rounded-md">
                    <div className="flex flex-col justify-center items-left h-full ml-4">
                        <p className="text-sm">Nov 2021 - May 2022</p>
                        <h4 className="text-3xl">Mentra</h4>
                        <p className="font-bold">Integration Data Scientist Intern</p>
                        <p className="mt-[10px] md:w-[250px]">Built job recommendation system using Python, GraphQL, Docker, and AWS specifically for neurodiverse individuals.</p>
                    </div>
                </div>
            </div>
            <div className="relative space-x-3 h-[250px] w-[540px] m-2">
                <img src={thumbnailMap["AWS"]} className="absolute h-[120px] w-[120px] md:h-[200px] md:w-[200px] rounded-md z-10 top-[60px] md:top-[30px] shadow-lg" />
                <div className="absolute left-[50px] bg-gradient-to-r dark:from-cyan-500 dark:to-blue-800 bg-blue-200 md:w-[460px] h-full pl-[70px] md:pl-[150px] md:pr-[50px] pr-[20px] shadow-md rounded-md">
                    <div className="flex flex-col justify-center items-left h-full ml-4">
                        <p className="text-sm">Aug 2022 - Aug 2025</p>
                        <h4 className="text-3xl">AWS</h4>
                        <p className="font-bold">Solution Architect Associate</p>
                        <a className="underline dark:text-blue-200" href="https://www.credly.com/badges/05b1dc7f-de76-43b1-84b1-7e13d143b489/public_url">Link to Certification</a>
                    </div>
                </div>
            </div>
            </div>

            
            
        
            
        </div>
    )
}