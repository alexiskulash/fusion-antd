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
            <Col
              span={14}
              className="left-panel"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Card
                title="Patient Record"
                className="patient-record-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0,
                  }}
                >
                  {/* Patient Record Checkboxes */}
                  <Row
                    gutter={[16, 8]}
                    style={{ marginBottom: 16, alignItems: "center" }}
                  >
                    <Col>
                      <Text strong>View:</Text>
                    </Col>
                    <Col>
                      <Checkbox defaultChecked>In Progress</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox>Details</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox>Completed</Checkbox>
                    </Col>
                    <Col>
                      <Text>Find:</Text>
                    </Col>
                    <Col>
                      <Input
                        placeholder="Last"
                        size="small"
                        style={{ width: 80 }}
                      />
                    </Col>
                    <Col>
                      <Input
                        placeholder="First"
                        size="small"
                        style={{ width: 80 }}
                      />
                    </Col>
                    <Col>
                      <Text>Last Retrieved Time:</Text>
                    </Col>
                    <Col>
                      <Text>18 Jan 20 08:00</Text>
                    </Col>
                    <Col>
                      <Text>Result/Download TPS was successful.</Text>
                    </Col>
                  </Row>

                  {/* Search Data Row */}
                  <Row gutter={[8, 8]} style={{ marginBottom: 16 }}>
                    <Col>
                      <Button size="small">Search Data</Button>
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
                  <Row gutter={12} style={{ flex: 1, minHeight: 0 }}>
                    <Col
                      span={8}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Card
                        title="Patient"
                        size="small"
                        className="info-section-card"
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          minHeight: 0,
                        }}
                      >
                        <div
                          className="form-fields"
                          style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
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

                    <Col
                      span={8}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Card
                        title="Exam"
                        size="small"
                        className="info-section-card"
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          minHeight: 0,
                        }}
                      >
                        <div
                          className="form-fields"
                          style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
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
                            <DatePicker
                              size="small"
                              style={{ width: "100%" }}
                            />
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

                    <Col
                      span={8}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Card
                        title="Other Information"
                        size="small"
                        className="info-section-card"
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          minHeight: 0,
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "11px",
                              lineHeight: 1.4,
                              marginBottom: 12,
                            }}
                          >
                            <Text style={{ fontSize: "11px" }}>
                              This is patient sensitive information, please
                              adhere to patient confidentiality rules. Please
                              verify the information entered matches the
                              patient's medical record to identify with the
                              patient to guarantee its accuracy.
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

                          <div style={{ marginBottom: 12, flex: 1 }}>
                            <Text strong style={{ fontSize: "11px" }}>
                              History:
                            </Text>
                          </div>

                          <div style={{ marginTop: "auto" }}>
                            <Button
                              type="primary"
                              size="small"
                              style={{ fontSize: "11px" }}
                            >
                              Start Exam
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            {/* Right Panel - Monitoring Data */}
            <Col span={10} className="right-panel">
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Status Section with Tabs */}
                <Card
                  size="small"
                  className="status-card"
                  style={{ marginBottom: 8 }}
                >
                  <div style={{ fontSize: "12px", marginBottom: 8 }}>
                    <Text style={{ color: "#ffffff" }}>
                      Result/Download TPS was successful.
                    </Text>
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginBottom: 8 }}
                  >
                    <Text style={{ color: "#cccccc", fontSize: "11px" }}>
                      Pulsevue
                    </Text>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: "11px",
                        borderBottom: "2px solid #52c41a",
                      }}
                    >
                      Report Output
                    </Text>
                    <Text style={{ color: "#ffffff", fontSize: "11px" }}>
                      Auto XLS
                    </Text>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <Checkbox style={{ color: "#ffffff" }}>
                      <span style={{ color: "#ffffff", fontSize: "11px" }}>
                        T/R Body Coil (in magnet.)
                      </span>
                    </Checkbox>
                  </div>
                </Card>

                {/* Call Body Call Section */}
                <Card
                  title="Call Body Call ( in request )"
                  size="small"
                  className="call-body-card"
                  style={{ marginBottom: 8, flex: 1 }}
                >
                  <div
                    className="call-body-content"
                    style={{ textAlign: "center", padding: "16px" }}
                  >
                    <div
                      className="pulse-display"
                      style={{
                        background: "#6b7c8f",
                        border: "2px solid #7c8da0",
                        borderRadius: "8px",
                        padding: "24px",
                        color: "#ffffff",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: 6,
                        }}
                      >
                        Pvn P1
                      </div>
                      <div style={{ fontSize: "12px" }}>Body/Volume Set</div>
                    </div>
                  </div>
                </Card>

                {/* In Table Section */}
                <Card
                  title="In Table"
                  size="small"
                  className="table-card"
                  style={{ marginBottom: 8, flex: 1 }}
                >
                  <div
                    className="table-content"
                    style={{ textAlign: "center", padding: "16px" }}
                  >
                    <div
                      style={{
                        background: "#6b7c8f",
                        border: "2px solid #7c8da0",
                        borderRadius: "8px",
                        padding: "20px",
                        color: "#ffffff",
                      }}
                    >
                      <div style={{ fontSize: "12px", marginBottom: 4 }}>
                        Body/Volume Set
                      </div>
                      <div style={{ fontSize: "11px", color: "#cccccc" }}>
                        Spine Posterior 32ch
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Apply All Checkbox */}
                <div style={{ marginBottom: 8 }}>
                  <Checkbox style={{ color: "#ffffff" }}>
                    <span style={{ color: "#ffffff", fontSize: "12px" }}>
                      Apply All
                    </span>
                  </Checkbox>
                </div>

                {/* SAR Display */}
                <Card
                  title="SAR Display"
                  size="small"
                  className="sar-card"
                  style={{ flex: 1 }}
                >
                  <div
                    style={{
                      background: "#6b7c8f",
                      borderRadius: "4px",
                      padding: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: "8px",
                        marginBottom: "8px",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#ffffff",
                      }}
                    >
                      <div>Parameter</div>
                      <div>Value</div>
                      <div>Limit</div>
                      <div>Avg/Avg %</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: "8px",
                        marginBottom: "4px",
                        fontSize: "11px",
                        color: "#ffffff",
                      }}
                    >
                      <div>Avg Wkg</div>
                      <div>4.2</div>
                      <div>&gt;</div>
                      <div>24.5</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: "8px",
                        marginBottom: "4px",
                        fontSize: "11px",
                        color: "#ffffff",
                      }}
                    >
                      <div>Live Wkg</div>
                      <div>16.0</div>
                      <div>&gt;</div>
                      <div></div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: "8px",
                        fontSize: "11px",
                        color: "#ffffff",
                      }}
                    >
                      <div>Act Wkg</div>
                      <div>0.0</div>
                      <div></div>
                      <div>0.0</div>
                    </div>
                  </div>
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
