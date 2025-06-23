import React, { useState } from "react";
import {
  Layout,
  Card,
  Table,
  Input,
  Select,
  Button,
  Form,
  DatePicker,
  Tabs,
  Space,
  Row,
  Col,
  Typography,
  Checkbox,
  Tag,
  Progress,
  Divider,
} from "antd";
import "./Monitor.css";
import {
  UserOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  SettingOutlined,
  PrinterOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { Content, Header } = Layout;
const { Option } = Select;
const { Text, Title } = Typography;

const Monitor: React.FC = () => {
  const [form] = Form.useForm();

  // Sample data for the patient record table
  const patientRecordData = [
    { key: "1", field: "Name", value: "John Doe" },
    { key: "2", field: "Patient ID", value: "P001" },
    { key: "3", field: "Height", value: "175 cm" },
    { key: "4", field: "Date of Birth", value: "01/01/1980" },
    { key: "5", field: "Sex", value: "M" },
    { key: "6", field: "Scheduled", value: "Yes" },
  ];

  const patientRecordColumns = [
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
      width: "40%",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: "60%",
    },
  ];

  return (
    <Layout className="monitor-layout">
      <Header className="monitor-header">
        <div className="header-content">
          <Tabs
            defaultActiveKey="monitor"
            className="header-tabs"
            items={[
              { key: "schedule", label: "Schedule" },
              { key: "monitor", label: "Monitor" },
              { key: "settings", label: "Settings" },
            ]}
          />

          <div className="header-center">
            <Text strong style={{ color: "#ffffff", fontSize: "16px" }}>
              qpetitxxx - Cardiac Monitor
            </Text>
          </div>

          <div className="header-right">
            <Text style={{ color: "#ffffff", marginRight: 16 }}>
              000:00:00 Video Stopped
            </Text>
          </div>
        </div>
      </Header>

      <Layout>
        <Content className="monitor-content">
          <Row gutter={16} style={{ height: "100%" }}>
            {/* Left Panel - Patient Record */}
            <Col span={12} className="left-panel">
              <Card title="Patient Record" className="patient-record-card">
                <Tabs
                  defaultActiveKey="view"
                  size="small"
                  items={[
                    { key: "view", label: "View" },
                    { key: "progress", label: "In Progress" },
                    { key: "details", label: "Details" },
                    { key: "completed", label: "Completed" },
                    { key: "files", label: "Files" },
                  ]}
                />

                <div className="search-section" style={{ margin: "16px 0" }}>
                  <Row gutter={8}>
                    <Col span={6}>
                      <Input placeholder="Search/Refresh" size="small" />
                    </Col>
                    <Col span={6}>
                      <Input placeholder="Filter" size="small" />
                    </Col>
                    <Col span={6}>
                      <DatePicker
                        placeholder="Last Retrieved Time"
                        size="small"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col span={6}>
                      <Button size="small">Search Data</Button>
                    </Col>
                  </Row>
                </div>

                <Table
                  columns={patientRecordColumns}
                  dataSource={patientRecordData}
                  pagination={false}
                  size="small"
                  className="patient-record-table"
                />

                {/* Patient, Exam, Other Information sections */}
                <Row gutter={16} style={{ marginTop: 16 }}>
                  <Col span={8}>
                    <Card
                      title="Patient"
                      size="small"
                      className="info-section-card"
                    >
                      <Form layout="vertical" size="small">
                        <Form.Item label="Name">
                          <Input size="small" />
                        </Form.Item>
                        <Form.Item label="Patient ID">
                          <Input size="small" />
                        </Form.Item>
                        <Form.Item label="Height">
                          <Input size="small" />
                        </Form.Item>
                        <Form.Item label="Date of Birth">
                          <DatePicker size="small" style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item label="Sex">
                          <Select size="small" style={{ width: "100%" }}>
                            <Option value="M">M</Option>
                            <Option value="F">F</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item label="Scheduled">
                          <Input size="small" />
                        </Form.Item>
                      </Form>
                    </Card>
                  </Col>

                  <Col span={8}>
                    <Card
                      title="Exam"
                      size="small"
                      className="info-section-card"
                    >
                      <Form layout="vertical" size="small">
                        <Form.Item label="Accession">
                          <Input size="small" />
                        </Form.Item>
                        <Form.Item label="Exam Description">
                          <Input size="small" />
                        </Form.Item>
                        <Form.Item label="Date">
                          <DatePicker size="small" style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item label="Description">
                          <Input.TextArea rows={2} size="small" />
                        </Form.Item>
                        <Form.Item label="Operator">
                          <Input size="small" />
                        </Form.Item>
                        <Form.Item label="Radiologist">
                          <Input size="small" />
                        </Form.Item>
                        <Form.Item label="Referring Physician">
                          <Input size="small" />
                        </Form.Item>
                      </Form>
                    </Card>
                  </Col>

                  <Col span={8}>
                    <Card
                      title="Other Information"
                      size="small"
                      className="info-section-card"
                    >
                      <div className="other-info-content">
                        <Text type="secondary">
                          This is patient sensitive information, please adhere
                          to patient confidentiality rules. Please verify the
                          information entered matches the patient's medical
                          record to identify with the patient to guarantee its
                          accuracy.
                        </Text>

                        <Divider />

                        <Row gutter={16}>
                          <Col span={12}>
                            <Text strong>Allergies:</Text>
                            <div>NONE</div>
                          </Col>
                          <Col span={12}>
                            <Text strong>Preg Alert:</Text>
                            <div>NONE</div>
                          </Col>
                        </Row>

                        <Row gutter={16} style={{ marginTop: 8 }}>
                          <Col span={12}>
                            <Text strong>Pregnancy Status:</Text>
                            <Select
                              size="small"
                              defaultValue="No Entry"
                              style={{ width: "100%" }}
                            >
                              <Option value="no">No Entry</Option>
                              <Option value="yes">Yes</Option>
                            </Select>
                          </Col>
                        </Row>

                        <div style={{ marginTop: 16 }}>
                          <Text strong>History:</Text>
                        </div>

                        <Button
                          type="primary"
                          size="small"
                          style={{ marginTop: 16 }}
                        >
                          Start Exam
                        </Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Right Panel - Monitoring Data */}
            <Col span={12} className="right-panel">
              <div className="monitoring-sections">
                {/* Status Section */}
                <Card
                  size="small"
                  className="status-card"
                  style={{ marginBottom: 16 }}
                >
                  <Text>Result/Download TPS was successful.</Text>
                  <div style={{ marginTop: 8 }}>
                    <Text type="secondary">Pulsevue</Text>
                    <Space style={{ float: "right" }}>
                      <Text>Report Output</Text>
                      <Text>Auto XLS</Text>
                    </Space>
                  </div>
                </Card>

                {/* Call Body Call Section */}
                <Card
                  title="Call Body Call ( in request )"
                  size="small"
                  className="call-body-card"
                  style={{ marginBottom: 16 }}
                >
                  <div className="call-body-content">
                    <div className="pulse-display">
                      <Text>Pvn P1</Text>
                      <div>Body/Volume Set</div>
                    </div>
                  </div>
                </Card>

                {/* Table Section */}
                <Card
                  title="In Table"
                  size="small"
                  className="table-card"
                  style={{ marginBottom: 16 }}
                >
                  <div className="table-content">
                    <Text>Body/Volume Set</Text>
                  </div>
                </Card>

                {/* Monitoring Controls */}
                <Card size="small" className="controls-card">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Button block>Apply All</Button>
                    </Col>
                    <Col span={12}>
                      <div className="sar-display">
                        <Text strong>SAR Display</Text>
                        <Table
                          size="small"
                          columns={[
                            {
                              title: "Parameter",
                              dataIndex: "param",
                              key: "param",
                            },
                            {
                              title: "Value",
                              dataIndex: "value",
                              key: "value",
                            },
                            {
                              title: "Limit",
                              dataIndex: "limit",
                              key: "limit",
                            },
                            {
                              title: "Avg/Avg %",
                              dataIndex: "avg",
                              key: "avg",
                            },
                          ]}
                          dataSource={[
                            {
                              key: "1",
                              param: "Avg Wkg",
                              value: "4.2",
                              limit: ">",
                              avg: "24.5",
                            },
                            {
                              key: "2",
                              param: "Live Wkg",
                              value: "16.0",
                              limit: ">",
                              avg: "",
                            },
                          ]}
                          pagination={false}
                          showHeader={true}
                        />
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Monitor;
