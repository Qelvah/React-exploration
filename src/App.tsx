import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppLayout from "./assets/components/AppLayout";

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
