import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Index";
import NavBar from "./components/navBar/NavBar";
import Content from "./components/content/Content";
import AnimationBackground from "./components/widgets/AnimationBackground";

function App() {
  return (
    <BrowserRouter>
      <Layout
        header={<NavBar />}
        content={<Content />}
        animationBackground={
          <AnimationBackground
            starSizes={[3, 6, 9, 15, 30, 45]}
            starColor={"#87888c33"}
            starNumber={20}
          />
        }
      />
      {/* <Test /> */}
    </BrowserRouter>
  );
}

export default App;
