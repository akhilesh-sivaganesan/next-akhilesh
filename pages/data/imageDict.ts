import ReactLogo from "../../public/static/icons/react-logo.png"
import VueLogo from "../../public/static/icons/vuecircle.png"
import NextLogo from "../../public/static/icons/nextjs.png"
import JSLogo from "../../public/static/icons/js-logo.png"
import HTMLLogo from "../../public/static/icons/html-lgo.png"
import CSSLogo from "../../public/static/icons/css-logo.png"
import jQueryLogo from "../../public/static/icons/jquery-logo.png"
import NodeLogo from "../../public/static/icons/nodejslogo.png"
import BootstrapLogo from "../../public/static/icons/bootstrap-logo.png"
import ExpoLogo from "../../public/static/icons/expo-logo.png"
import VisualStudioLogo from "../../public/static/icons/visual-studio-logo.png"
import AtomLogo from "../../public/static/icons/atom-logo.png"
import GitHubLogo from "../../public/static/icons/GitHub-Mark.png"
import PythonLogo from "../../public/static/icons/python-logo-transformed.png"
import JavaLogo from "../../public/static/icons/java-logo.jpg"
import NLTKLogo from "../../public/static/icons/NLTK-logo.png"
import SpaCyLogo from "../../public/static/icons/spacy-logo.png"
import NumpyLogo from "../../public/static/icons/NumPy-logo.png"
import PandasLogo from "../../public/static/icons/pandas.png"
import KerasLogo from "../../public/static/icons/1200px-Keras_logo.svg.png"
import TensorflowLogo from "../../public/static/icons/Tensorflow_logo.svg.png"
import ScikitLearnLogo from "../../public/static/icons/scikit-learn-logo.png"
import JupyterLogo from "../../public/static/icons/1200px-Jupyter_logo.svg.png"
import SpyderLogo from "../../public/static/icons/spyder-ide.png"
import DockerLogo from "../../public/static/icons/docker-icon.png"
import LinuxLogo from "../../public/static/icons/linux-logo.png"
import GraphQLLogo from "../../public/static/icons/graphQL.png"
import MatplotLogo from "../../public/static/icons/matplotlib.png"
import WebflowLogo from "../../public/static/icons/webflow.png"
import DjangoLogo from "../../public/static/icons/django.jpg"
import FlaskLogo from "../../public/static/icons/flask.png"
import TailwindLogo from "../../public/static/icons/tailwindcss-logo.png"
import AWSLogo from "../../public/static/icons/aws-logo.png"

interface ArrStr {
    [key: string]: string;
}

const imageMap = {
    "React.js": ReactLogo.src,
    "Vue.js": VueLogo.src,
    "Next.js": NextLogo.src,
    "JavaScript": JSLogo.src,
    "HTML": HTMLLogo.src,
    "CSS": CSSLogo.src,
    "jQuery": jQueryLogo.src,
    "Node.js": NodeLogo.src,
    "Bootstrap": BootstrapLogo.src,
    "Expo": ExpoLogo.src,
    "Visual Studio": VisualStudioLogo.src,
    "Atom": AtomLogo.src,
    "GitHub": GitHubLogo.src,
    "Python": PythonLogo.src,
    "Java": JavaLogo.src,
    "NLTK": NLTKLogo.src,
    "spaCy": SpaCyLogo.src,
    "NumPy": NumpyLogo.src,
    "Pandas": PandasLogo.src,
    "Keras": KerasLogo.src,
    "TensorFlow": TensorflowLogo.src,
    "scikit-learn": ScikitLearnLogo.src,
    "Jupyter": JupyterLogo.src,
    "Spyder": SpyderLogo.src,
    "Docker": DockerLogo.src,
    "Linux": LinuxLogo.src,
    "GraphQL": GraphQLLogo.src,
    "Matplotlib": MatplotLogo.src,
    "Webflow": WebflowLogo.src,
    "Flask": FlaskLogo.src,
    "Django": DjangoLogo.src,
    "TailwindCSS": TailwindLogo.src,
    "AWS": AWSLogo.src,
} as ArrStr

//Add Tailwindcss, Django, Flask, Bootstrap
//AWS, Docker, Linux, Windows, Firebase, Git, 

export default imageMap