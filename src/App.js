import "./App.css";
import {
  HomePage,
  Navbar,
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  News,
} from "./components";
import { Layout, Typography, Space } from "antd";
import { Switch, Link, Route } from "react-router-dom";
import "antd/dist/antd.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ textAlign: "center", color: "white" }}
          >
            Made with ❤️ by <a href="https://anisamaiya.vercel.app">Animesh</a>
          </Typography.Title>
          <Space size="large">
            <a
              style={{ fontSize: "24px", margin: "8px" }}
              aria-label="Github"
              href="https://github.com/asamaiya00/"
            >
              <GithubOutlined />
            </a>
            <a
              style={{ fontSize: "24px", margin: "8px" }}
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/animesh-samaiya-aa3166190/"
            >
              <LinkedinOutlined />
            </a>
            <a
              style={{ fontSize: "24px", margin: "8px" }}
              aria-label="Twitter"
              href="https://twitter.com/asamaiya00"
            >
              <TwitterOutlined />
            </a>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
