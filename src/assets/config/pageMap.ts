import Home from "../pages/Home";
import About from "../pages/About";

interface Page {
  path:string;
  label:string;
  component:React.FC;
}

// all pages
export const pages: Page[] = [
  {path:"/", label:"Home", component: Home},
  {path:"/about", label:"About", component: About},
];

// navbar 
export const navPages: Page[] = [
  {path:"/", label:"Home", component: Home},
  {path:"/about", label:"About", component: About},
]
