import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Index";
import NavBar from "./components/navBar/NavBar";
import Content from "./components/content/Content";

function App() {
  return (
    <BrowserRouter>
      <Layout header={<NavBar />} content={<Content />} />
    </BrowserRouter>
  );
}

export default App;
