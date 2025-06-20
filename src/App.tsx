import { useState } from "react";
import {
  Layout,
  Typography,
  Button,
  Card,
  Space,
  Avatar,
  Row,
  Col,
  Divider,
  Badge,
} from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  GithubOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="header-content">
          <Space size="large" align="center">
            <Avatar src={viteLogo} size={48} />
            <Avatar src={reactLogo} size={48} />
            <Title level={2} style={{ margin: 0, color: "#fff" }}>
              Vite + React + Ant Design
            </Title>
          </Space>
        </div>
      </Header>

      <Content className="app-content">
        <div className="content-container">
          <Row justify="center">
            <Col xs={24} sm={20} md={16} lg={12} xl={10}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div className="logo-section">
                  <Space size="large" align="center" wrap>
                    <Link href="https://vite.dev" target="_blank">
                      <Badge
                        count={
                          <ThunderboltOutlined style={{ color: "#646cff" }} />
                        }
                      >
                        <Avatar src={viteLogo} size={80} />
                      </Badge>
                    </Link>
                    <Link href="https://react.dev" target="_blank">
                      <Avatar
                        src={reactLogo}
                        size={80}
                        className="spinning-logo"
                      />
                    </Link>
                  </Space>
                </div>

                <Card
                  className="main-card"
                  title={
                    <Title level={3} style={{ margin: 0 }}>
                      Welcome to Your New Ant Design App
                    </Title>
                  }
                >
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{ width: "100%" }}
                  >
                    <div className="counter-section">
                      <Space size="middle" align="center">
                        <Button
                          type="primary"
                          icon={<MinusOutlined />}
                          onClick={() => setCount((count) => count - 1)}
                          disabled={count <= 0}
                        />
                        <Badge count={count} showZero>
                          <Text
                            strong
                            style={{
                              fontSize: "1.2em",
                              minWidth: "60px",
                              textAlign: "center",
                              display: "inline-block",
                            }}
                          >
                            Count
                          </Text>
                        </Badge>
                        <Button
                          type="primary"
                          icon={<PlusOutlined />}
                          onClick={() => setCount((count) => count + 1)}
                        />
                      </Space>
                    </div>

                    <Divider />

                    <Paragraph>
                      Edit <Text code>src/App.tsx</Text> and save to test HMR
                      with Ant Design components.
                    </Paragraph>

                    <Paragraph type="secondary">
                      This app now uses Ant Design's beautiful components and
                      theming system. Try the counter buttons above and explore
                      the responsive design!
                    </Paragraph>
                  </Space>
                </Card>

                <Card size="small" className="info-card">
                  <Space wrap>
                    <Link href="https://ant.design" target="_blank">
                      <Button icon={<GithubOutlined />}>Ant Design Docs</Button>
                    </Link>
                    <Link href="https://vite.dev" target="_blank">
                      <Button type="dashed">Vite Docs</Button>
                    </Link>
                    <Link href="https://react.dev" target="_blank">
                      <Button type="dashed">React Docs</Button>
                    </Link>
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer className="app-footer">
        <Text type="secondary">
          Built with ❤️ using Vite + React + Ant Design
        </Text>
      </Footer>
    </Layout>
  );
}

export default App;
