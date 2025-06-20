import { Typography } from "antd";

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Title level={1}>Hello, World!</Title>
    </div>
  );
}

export default App;
