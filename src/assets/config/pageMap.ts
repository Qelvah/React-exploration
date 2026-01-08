import Home from "../pages/Home";
import About from "../pages/About";
import TicTacToe from "../components/TicTacToe/TicTacToe";

interface Page {
  path:string;
  label:string;
  component:React.FC;
}

// all pages
export const pages: Page[] = [
  {path:"/", label:"Home", component: Home},
  {path:"/about", label:"About", component: About},
  {path:"/tic-tac-toe", label:"Tic-Tac-Toe", component: TicTacToe}
];

// navbar 
export const navPages: Page[] = [
  {path:"/", label:"Home", component: Home},
  {path:"/about", label:"About", component: About},
  {path:"/tic-tac-toe", label:"Tic-Tac-Toe", component: TicTacToe}
]
