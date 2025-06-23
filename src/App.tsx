import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { ConfigProvider, theme, Button, Space } from "antd";
import Scheduler from "./Scheduler";
import Monitor from "./Monitor";
import "./App.css";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <div
      style={{
        padding: "16px",
        background: "#2d2d2d",
        borderBottom: "1px solid #444444",
        display: "flex",
        gap: "8px",
      }}
    >
      <Link to="/">
        <Button type={location.pathname === "/" ? "primary" : "default"}>
          Patient Scheduler
        </Button>
      </Link>
      <Link to="/monitor">
        <Button type={location.pathname === "/monitor" ? "primary" : "default"}>
          Cardiac Monitor
        </Button>
      </Link>
    </div>
  );
};

const AppContent: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Scheduler />} />
        <Route path="/monitor" element={<Monitor />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  const darkTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorBgContainer: "#2d2d2d",
      colorBgLayout: "#1a1a1a",
      colorText: "#ffffff",
      colorTextSecondary: "#cccccc",
      colorBorder: "#444444",
      colorPrimary: "#1890ff",
    },
  };

  return (
    <ConfigProvider theme={darkTheme}>
      <Router>
        <AppContent />
      </Router>
    </ConfigProvider>
  );
};

export default App;
