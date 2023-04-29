export interface SkillAreaType {
    title: string,
    skills: string[],
    keywords: string[],
}

type Tag = "Web Development" | "Data Science" | "AI/ML" | "Hobby";
type SkillType = "React.js" | "Vue.js" | "Next.js" | "JavaScript" | "HTML" | "CSS" | "jQuery" | "Node.js" | "Bootstrap" | "Expo" | "Visual Studio" | "Atom" | "GitHub" | "Python" | "Java" | "NLTK" | "spaCy" | "NumPy" | "Pandas" | "Keras" | "TensorFlow" | "scikit-learn" | "Jupyter" | "Spyder" | "Docker" | "Linux" | "GraphQL" | "Matplotlib" | "Webflow" | "Flask" | "Django" | "TailwindCSS" | "AWS";
export interface ProjectType {
    title: string,
    description: string,
    skills: SkillType[],
    tags: Tag[],
    thumbnail: string,
    startYear: string,
    startMonth: string,
    endYear: string,
    endMonth: string,
    demoLink: string,
    gitHubLink: string,
}


