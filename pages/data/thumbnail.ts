import WebDevThumbnail from "../../public/static/icons/webdevthumbnail.jpg"
import DataSciThumbnail from "../../public/static/icons/datascithumbnail.png"
import AIThumbnail from "../../public/static/icons/aithumbnail.png"
import TechThumbnail from "../../public/static/icons/techiso.png"
import MentraThumbnail from "../../public/static/icons/Mentra-Logo.jpeg"
import AWSLogo from "../../public/static/icons/gradient-aws.png"
import LMLogo from "../../public/static/icons/Lockheed-Martin-logo.jpg"
import VoltaicLogo from "../../public/static/icons/Voltaic-Logo.png"
import MogiLogo from "../../public/static/icons/Mogi-icon.png"
import BrainLogo from "../../public/static/icons/brain-tumor-none.png"
import FruitLogo from "../../public/static/icons/fruit-scanner.jpeg"
import NetflixLogo from "../../public/static/icons/netflix-logo.jpg"
import NotesAppLogo from "../../public/static/icons/NotesApp-transformed.png"

interface ArrStr {
    [key: string]: string;
}


const thumbnailMap = {
    "Web Development": WebDevThumbnail.src,
    "Data Science": DataSciThumbnail.src,
    "Artificial Intelligence": AIThumbnail.src,
    "Technologies": TechThumbnail.src,
    "Mentra": MentraThumbnail.src,
    "Mentra Data Science": MentraThumbnail.src,
    "AWS": AWSLogo.src,
    "LM": LMLogo.src,
    "Voltaic Industries": VoltaicLogo.src,
    "Mogi Quote Dispenser": MogiLogo.src,
    "Brain Tumor Detection": BrainLogo.src,
    "Fruit Quality Scanner": FruitLogo.src,
    "Next.js Netflix Clone": NetflixLogo.src,
    "Task Timer App": NotesAppLogo.src,

} as ArrStr

export default thumbnailMap