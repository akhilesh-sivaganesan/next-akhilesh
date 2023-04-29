import GitHubLogo from "../public/static/icons/GitHub-Mark-120px-plus-transformed.png"
import MyLogo from "../public/static/icons/favicons/orange-favicon-large.png"
import LinkedInLogo from "../public/static/icons/LI-In-Bug.png"
import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';
import { useTheme } from "next-themes";
import data from "@/pages/data/data";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Header() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const { systemTheme, theme, setTheme } = useTheme();



    return (
        <div className="flex flex-row justify-between items-center bg-slate-100 dark:bg-[#1d1d1da1] h-[60px] px-5 w-full fixed z-50">
            <div className="flex flex-row justify-center items-center space-x-4">
                <a href="#"><img src={MyLogo.src} className="icon" /></a>
                <div className="flex flex-row space-x-4">
                    <a className="nav-link" href="#Skills">Skills</a>
                    <a className="nav-link" href="#Internships">Experience</a>
                    <a className="nav-link" href="#Projects">Projects</a>
                </div>
            </div>

            <div className="flex flex-row space-x-2">

                <IconButton sx={{ ml: 1 }} onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} color="inherit">
                    {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>


                <a href={data.github} target="_blank"><img src={GitHubLogo.src} className="icon" /></a>
                <a href={data.linkedin} target="_blank"><img src={LinkedInLogo.src} className="icon" /></a>
            </div>
        </div>
    )
}