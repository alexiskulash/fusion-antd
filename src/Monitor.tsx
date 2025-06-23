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
            <Col span={14} className="left-panel">
              <Card
                title="Patient Record"
                className="patient-record-card"
                style={{ height: "100%" }}
              >
                {/* Patient Record Tabs */}
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

                {/* Search and Filter Controls Row */}
                <Row gutter={[8, 8]} style={{ marginBottom: 16 }}>
                  <Col span={4}>
                    <Input placeholder="Search/Refresh" size="small" />
                  </Col>
                  <Col span={3}>
                    <Input placeholder="Filter" size="small" />
                  </Col>
                  <Col span={6}>
                    <DatePicker
                      placeholder="Last Retrieved Time: 18 Jan 20 08:00"
                      size="small"
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col span={3}>
                    <Button size="small" type="primary">
                      Search Data
                    </Button>
                  </Col>
                  <Col span={8}>
                    <Text style={{ fontSize: "11px", color: "#666" }}>
                      Result/Download TPS was successful.
                    </Text>
                  </Col>
                </Row>

                {/* Patient Data Table with proper columns */}
                <Table
                  columns={[
                    {
                      title: "Scheduled",
                      dataIndex: "scheduled",
                      key: "scheduled",
                      width: 80,
                    },
                    {
                      title: "Worklist T.",
                      dataIndex: "worklistT",
                      key: "worklistT",
                      width: 80,
                    },
                    {
                      title: "Name",
                      dataIndex: "name",
                      key: "name",
                      width: 100,
                    },
                    {
                      title: "Patient ID",
                      dataIndex: "patientId",
                      key: "patientId",
                      width: 80,
                    },
                    {
                      title: "Accession",
                      dataIndex: "accession",
                      key: "accession",
                      width: 80,
                    },
                    {
                      title: "SPS Descri.",
                      dataIndex: "spsDescri",
                      key: "spsDescri",
                      width: 80,
                    },
                    {
                      title: "Modality",
                      dataIndex: "modality",
                      key: "modality",
                      width: 70,
                    },
                    {
                      title: "Referring Physic.",
                      dataIndex: "referringPhysic",
                      key: "referringPhysic",
                      width: 100,
                    },
                    {
                      title: "Scheduled",
                      dataIndex: "scheduled2",
                      key: "scheduled2",
                      width: 80,
                    },
                    {
                      title: "Status",
                      dataIndex: "status",
                      key: "status",
                      width: 70,
                    },
                    {
                      title: "Local Protocol",
                      dataIndex: "localProtocol",
                      key: "localProtocol",
                      width: 100,
                    },
                    {
                      title: "Recomm.",
                      dataIndex: "recomm",
                      key: "recomm",
                      width: 80,
                    },
                    {
                      title: "Caution",
                      dataIndex: "caution",
                      key: "caution",
                      width: 70,
                    },
                  ]}
                  dataSource={[]}
                  pagination={false}
                  size="small"
                  className="patient-record-table"
                  style={{ marginBottom: 16 }}
                  bordered
                />

                {/* Bottom Three Sections */}
                <Row gutter={12}>
                  <Col span={8}>
                    <Card
                      title="Patient"
                      size="small"
                      className="info-section-card"
                      style={{ height: "240px" }}
                    >
                      <div className="form-fields">
                        <div className="form-field">
                          <label>Name:</label>
                          <Input size="small" />
                        </div>
                        <div className="form-field">
                          <label>Patient ID:</label>
                          <Input size="small" />
                        </div>
                        <div className="form-field">
                          <label>Height:</label>
                          <Input size="small" />
                        </div>
                        <div className="form-field">
                          <label>Date of Birth:</label>
                          <DatePicker
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="MM/DD/YYYY"
                          />
                        </div>
                        <div className="form-field">
                          <label>Sex:</label>
                          <Select size="small" style={{ width: "100%" }}>
                            <Option value="M">M</Option>
                            <Option value="F">F</Option>
                          </Select>
                        </div>
                        <div className="form-field">
                          <label>Scheduled:</label>
                          <Input size="small" />
                        </div>
                      </div>
                    </Card>
                  </Col>

                  <Col span={8}>
                    <Card
                      title="Exam"
                      size="small"
                      className="info-section-card"
                      style={{ height: "240px" }}
                    >
                      <div className="form-fields">
                        <div className="form-field">
                          <label>Accession:</label>
                          <Input size="small" />
                        </div>
                        <div className="form-field">
                          <label>Exam Description:</label>
                          <Input size="small" />
                        </div>
                        <div className="form-field">
                          <label>Date:</label>
                          <DatePicker size="small" style={{ width: "100%" }} />
                        </div>
                        <div className="form-field">
                          <label>Description:</label>
                          <Input.TextArea rows={2} size="small" />
                        </div>
                        <div className="form-field">
                          <label>Operator:</label>
                          <Input
                            size="small"
                            placeholder="Last Name, First Name"
                          />
                        </div>
                        <div className="form-field">
                          <label>Radiologist:</label>
                          <Input
                            size="small"
                            placeholder="Last Name, First Name"
                          />
                        </div>
                        <div className="form-field">
                          <label>Referring Physician:</label>
                          <Input
                            size="small"
                            placeholder="Last Name, First Name"
                          />
                        </div>
                      </div>
                    </Card>
                  </Col>

                  <Col span={8}>
                    <Card
                      title="Other Information"
                      size="small"
                      className="info-section-card"
                      style={{ height: "240px" }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          lineHeight: 1.4,
                          marginBottom: 12,
                        }}
                      >
                        <Text style={{ fontSize: "11px" }}>
                          This is patient sensitive information, please adhere
                          to patient confidentiality rules. Please verify the
                          information entered matches the patient's medical
                          record to identify with the patient to guarantee its
                          accuracy.
                        </Text>
                      </div>

                      <div style={{ marginBottom: 8 }}>
                        <Text strong style={{ fontSize: "11px" }}>
                          Allergies:{" "}
                        </Text>
                        <Text style={{ fontSize: "11px" }}>NONE</Text>
                      </div>

                      <div style={{ marginBottom: 8 }}>
                        <Text strong style={{ fontSize: "11px" }}>
                          Preg Alert:{" "}
                        </Text>
                        <Text style={{ fontSize: "11px" }}>NONE</Text>
                      </div>

                      <div style={{ marginBottom: 8 }}>
                        <Text strong style={{ fontSize: "11px" }}>
                          Pregnancy Status:{" "}
                        </Text>
                        <Select
                          size="small"
                          defaultValue="No Entry"
                          style={{ width: "100%", fontSize: "11px" }}
                        >
                          <Option value="no">No Entry</Option>
                          <Option value="yes">Yes</Option>
                        </Select>
                      </div>

                      <div style={{ marginBottom: 12 }}>
                        <Text strong style={{ fontSize: "11px" }}>
                          History:
                        </Text>
                      </div>

                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "11px" }}
                      >
                        Start Exam
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Right Panel - Monitoring Data */}
            <Col span={10} className="right-panel">
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Status Section */}
                <Card
                  size="small"
                  className="status-card"
                  style={{ marginBottom: 12 }}
                >
                  <div style={{ fontSize: "12px" }}>
                    <Text>Result/Download TPS was successful.</Text>
                    <div
                      style={{
                        marginTop: 6,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text type="secondary" style={{ fontSize: "11px" }}>
                        Pulsevue
                      </Text>
                      <Space style={{ fontSize: "11px" }}>
                        <Text>Report Output</Text>
                        <Text>Auto XLS</Text>
                      </Space>
                    </div>
                  </div>
                </Card>

                {/* Call Body Call Section */}
                <Card
                  title="Call Body Call ( in request )"
                  size="small"
                  className="call-body-card"
                  style={{ marginBottom: 12, flex: 1 }}
                >
                  <div
                    className="call-body-content"
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    <div className="pulse-display">
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginBottom: 4,
                        }}
                      >
                        Pvn P1
                      </div>
                      <div style={{ fontSize: "12px" }}>Body/Volume Set</div>
                    </div>
                  </div>
                </Card>

                {/* Table Section */}
                <Card
                  title="In Table"
                  size="small"
                  className="table-card"
                  style={{ marginBottom: 12, flex: 1 }}
                >
                  <div
                    className="table-content"
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    <div style={{ fontSize: "12px" }}>Body/Volume Set</div>
                  </div>
                </Card>

                {/* Apply All Button */}
                <Card size="small" style={{ marginBottom: 12 }}>
                  <Button block size="small">
                    Apply All
                  </Button>
                </Card>

                {/* SAR Display */}
                <Card
                  title="SAR Display"
                  size="small"
                  className="sar-card"
                  style={{ flex: 1 }}
                >
                  <Table
                    size="small"
                    columns={[
                      {
                        title: "Parameter",
                        dataIndex: "param",
                        key: "param",
                        width: 80,
                      },
                      {
                        title: "Value",
                        dataIndex: "value",
                        key: "value",
                        width: 50,
                      },
                      {
                        title: "Limit",
                        dataIndex: "limit",
                        key: "limit",
                        width: 40,
                      },
                      {
                        title: "Avg/Avg %",
                        dataIndex: "avg",
                        key: "avg",
                        width: 60,
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
                    style={{ fontSize: "10px" }}
                  />
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
