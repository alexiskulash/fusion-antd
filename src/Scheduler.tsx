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
  Switch,
  Badge,
  Tabs,
  Space,
  Row,
  Col,
  Typography,
  Divider,
  Avatar,
  Tag,
} from "antd";
import {
  SearchOutlined,
  UserOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  SettingOutlined,
  SaveOutlined,
  UndoOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const { Sider, Content, Header } = Layout;
const { Option } = Select;
const { Text, Title } = Typography;

const Scheduler: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedPatient, setSelectedPatient] = useState<string>("vidOps");
  const [patientFilter, setPatientFilter] = useState<string>("");
  const [procedureFilter, setProcedureFilter] = useState<string>("");
  const [dateTimeFilter, setDateTimeFilter] = useState<string>("");

  // Patient data for the table
  const patientData = [
    {
      key: "1",
      name: "vidOps",
      id: "001",
      status: "scheduled",
      time: "8:30 AM",
      date: "2024-01-15",
      procedure: "Research MRI",
    },
  ];

  // Filter patients based on applied filters
  const filteredPatients = patientData.filter((patient) => {
    const matchesPatient =
      !patientFilter ||
      patient.name.toLowerCase().includes(patientFilter.toLowerCase());
    const matchesProcedure =
      !procedureFilter ||
      patient.procedure.toLowerCase().includes(procedureFilter.toLowerCase());
    const matchesDateTime =
      !dateTimeFilter ||
      patient.time.includes(dateTimeFilter) ||
      patient.date.includes(dateTimeFilter);
    return matchesPatient && matchesProcedure && matchesDateTime;
  });

  // Generate filter status text
  const getFilterStatus = () => {
    const filters = [];
    if (patientFilter) filters.push(`Patient: ${patientFilter}`);
    if (procedureFilter) filters.push(`Procedure: ${procedureFilter}`);
    if (dateTimeFilter) filters.push(`Date/Time: ${dateTimeFilter}`);

    if (filters.length === 0) {
      return "Scheduled, Today";
    }
    return filters.join(", ");
  };

  const patientColumns = [
    {
      title: "Patient",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      render: (text: string, record: any) => (
        <div
          className={`patient-row ${selectedPatient === text ? "selected" : ""}`}
          onClick={() => setSelectedPatient(text)}
        >
          <Avatar icon={<UserOutlined />} size="small" />
          <span style={{ marginLeft: 8 }}>{text}</span>
          {record.status === "scheduled" && (
            <Badge status="success" style={{ marginLeft: 8 }} />
          )}
        </div>
      ),
    },
    {
      title: "Procedure",
      dataIndex: "procedure",
      key: "procedure",
      sorter: (a: any, b: any) => a.procedure.localeCompare(b.procedure),
      render: (text: string) => (
        <Text style={{ color: "#cccccc", fontSize: "12px" }}>{text}</Text>
      ),
    },
    {
      title: "Date & Time",
      dataIndex: "time",
      key: "time",
      sorter: (a: any, b: any) => a.time.localeCompare(b.time),
      render: (text: string, record: any) => (
        <div>
          <div style={{ color: "#cccccc", fontSize: "12px" }}>
            {record.date}
          </div>
          <div style={{ color: "#cccccc", fontSize: "12px" }}>{text}</div>
        </div>
      ),
    },
  ];

  return (
    <Layout className="patient-scheduler-layout">
      <Header className="scheduler-header">
        <div className="header-content">
          <Title level={4} style={{ color: "#ffffff", margin: 0 }}>
            <MedicineBoxOutlined style={{ marginRight: 8 }} />
            Scheduler
          </Title>
          <Space style={{ marginLeft: "auto" }}>
            <Button
              icon={<SettingOutlined />}
              type="text"
              style={{ color: "#ffffff" }}
            />
            <Text style={{ color: "#cccccc" }}>8:47:13 AM</Text>
          </Space>
        </div>
      </Header>

      <Layout>
        <Sider width={400} className="scheduler-sider">
          <div className="sider-content">
            <div className="search-section">
              <Input
                placeholder="Search Participants"
                prefix={<SearchOutlined />}
                className="search-input"
              />
              <Select
                defaultValue="Program Selection"
                className="program-select"
              >
                <Option value="program1">Program Selection</Option>
              </Select>
            </div>

            <div className="patients-section">
              <div className="section-header">
                <Text strong>Patients</Text>
                <Text type="secondary" style={{ marginLeft: "16px" }}>
                  {getFilterStatus()}
                </Text>
              </div>

              {/* Patient Filters */}
              <div className="patient-filters">
                <Input
                  placeholder="Filter by Patient"
                  value={patientFilter}
                  onChange={(e) => setPatientFilter(e.target.value)}
                  size="small"
                  style={{ marginBottom: 4 }}
                />
                <Input
                  placeholder="Filter by Procedure"
                  value={procedureFilter}
                  onChange={(e) => setProcedureFilter(e.target.value)}
                  size="small"
                  style={{ marginBottom: 4 }}
                />
                <Input
                  placeholder="Filter by Date & Time"
                  value={dateTimeFilter}
                  onChange={(e) => setDateTimeFilter(e.target.value)}
                  size="small"
                  style={{ marginBottom: 8 }}
                />
              </div>

              <Table
                columns={patientColumns}
                dataSource={filteredPatients}
                pagination={false}
                size="small"
                showHeader={true}
                className="patients-table"
              />
            </div>
          </div>
        </Sider>

        <Content className="main-content">
          <div className="content-wrapper">
            {/* Top Row - Patient Info */}
            <Row gutter={[12, 8]} style={{ marginBottom: 12 }}>
              <Col span={24}>
                <Card title="vidOps" className="info-card" size="small">
                  <Row gutter={8}>
                    <Col span={4}>
                      <div className="form-field">
                        <label>Last Name</label>
                        <Input size="small" />
                      </div>
                    </Col>
                    <Col span={4}>
                      <div className="form-field">
                        <label>First Name</label>
                        <Input size="small" />
                      </div>
                    </Col>
                    <Col span={4}>
                      <div className="form-field">
                        <label>Middle Name</label>
                        <Input size="small" />
                      </div>
                    </Col>
                    <Col span={3}>
                      <div className="form-field">
                        <label>DOB</label>
                        <DatePicker size="small" style={{ width: "100%" }} />
                      </div>
                    </Col>
                    <Col span={3}>
                      <div className="form-field">
                        <label>Age</label>
                        <Input size="small" />
                      </div>
                    </Col>
                    <Col span={3}>
                      <div className="form-field">
                        <label>Gender</label>
                        <Select size="small" style={{ width: "100%" }}>
                          <Option value="M">M</Option>
                          <Option value="F">F</Option>
                        </Select>
                      </div>
                    </Col>
                    <Col span={3}>
                      <div className="form-field">
                        <label>Weight/Height</label>
                        <Input size="small" />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={8} style={{ marginTop: 8 }}>
                    <Col span={4}>
                      <div className="form-field">
                        <label>Patient ID</label>
                        <Input size="small" />
                      </div>
                    </Col>
                    <Col span={4}>
                      <div className="form-field">
                        <label>MRN</label>
                        <Input size="small" />
                      </div>
                    </Col>
                    <Col span={4}>
                      <div className="form-field">
                        <label>Accession No.</label>
                        <Input size="small" />
                      </div>
                    </Col>
                    <Col span={4}>
                      <div className="form-field">
                        <label>Study ID</label>
                        <Input size="small" />
                      </div>
                    </Col>
                    <Col span={4}>
                      <div className="form-field">
                        <label>Visit ID</label>
                        <Input size="small" />
                      </div>
                    </Col>
                    <Col span={4}>
                      <div className="form-field">
                        <label>Weight/Height</label>
                        <Input size="small" />
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            {/* Main Content Grid - Matches Original Layout */}
            <Row gutter={[12, 12]}>
              {/* Top Row - Medical Info and Examination Info */}
              <Col span={12}>
                <Card
                  title="Medical Information"
                  className="info-card"
                  size="small"
                >
                  <div className="form-field" style={{ marginBottom: 8 }}>
                    <label>Admitting Diagnosis</label>
                    <Select
                      placeholder="Select diagnosis"
                      size="small"
                      style={{ width: "100%" }}
                    >
                      <Option value="dx1">Diagnosis 1</Option>
                    </Select>
                  </div>
                  <div className="form-field">
                    <label>Other Diagnosis</label>
                    <Select
                      placeholder="Select other"
                      size="small"
                      style={{ width: "100%" }}
                    >
                      <Option value="other1">Other 1</Option>
                    </Select>
                  </div>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="Examination Information"
                  className="info-card"
                  size="small"
                >
                  <div className="form-field" style={{ marginBottom: 8 }}>
                    <label>Exam Technique</label>
                    <Select
                      placeholder="Select technique"
                      size="small"
                      style={{ width: "100%" }}
                    >
                      <Option value="tech1">Technique 1</Option>
                    </Select>
                  </div>
                  <div className="form-field" style={{ marginBottom: 8 }}>
                    <label>Scan Description</label>
                    <Input placeholder="Enter description" size="small" />
                  </div>
                  <div className="form-field" style={{ marginBottom: 8 }}>
                    <label>Study Comments</label>
                    <Input.TextArea
                      rows={2}
                      placeholder="Enter comments"
                      size="small"
                    />
                  </div>
                  <div className="checkbox-group">
                    <div style={{ marginBottom: 4 }}>
                      <Switch size="small" />{" "}
                      <span style={{ marginLeft: 8, fontSize: "12px" }}>
                        SEE I/O Channel
                      </span>
                    </div>
                    <div>
                      <Switch size="small" />{" "}
                      <span style={{ marginLeft: 8, fontSize: "12px" }}>
                        Body Coil/MRS
                      </span>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* Second Row - Alerts and Institution */}
              <Col span={8}>
                <Card
                  title="Alerts"
                  className="info-card"
                  size="small"
                  style={{ height: "140px" }}
                >
                  <div style={{ marginBottom: 8 }}>
                    <Text style={{ color: "#cccccc", fontSize: "12px" }}>
                      Medical Alert:
                    </Text>
                    <div style={{ color: "#888888", fontSize: "11px" }}>
                      No alerts
                    </div>
                  </div>
                  <div>
                    <Text style={{ color: "#cccccc", fontSize: "12px" }}>
                      Allergies:
                    </Text>
                    <div style={{ color: "#888888", fontSize: "11px" }}>
                      No allergies
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={16}>
                <Card title="Institution" className="info-card" size="small">
                  <Row gutter={8}>
                    <Col span={8}>
                      <div className="form-field">
                        <label>Performing Physician</label>
                        <Select
                          defaultValue="SIEMENS Psychiatry - Physician 1"
                          size="small"
                          style={{ width: "100%" }}
                        >
                          <Option value="physician1">
                            SIEMENS Psychiatry - Physician 1
                          </Option>
                        </Select>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="form-field">
                        <label>Referring Physician</label>
                        <Select
                          placeholder="Select physician"
                          size="small"
                          style={{ width: "100%" }}
                        >
                          <Option value="ref1">Referring Physician 1</Option>
                        </Select>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="form-field">
                        <label>Requesting Physician</label>
                        <Select
                          placeholder="Select physician"
                          size="small"
                          style={{ width: "100%" }}
                        >
                          <Option value="req1">Requesting Physician 1</Option>
                        </Select>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>

              {/* Third Row - Right Side Sections */}
              <Col span={12}>
                <div style={{ height: "100%" }}></div>
              </Col>
              <Col span={12}>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Card
                      title="Program Selection"
                      className="info-card"
                      size="small"
                    >
                      <Select
                        defaultValue="CHILD > 18E > 22 Channel + Amy_Pilot_Subtle"
                        style={{ width: "100%" }}
                        size="small"
                      >
                        <Option value="program1">
                          CHILD &gt; 18E &gt; 22 Channel + Amy_Pilot_Subtle
                        </Option>
                      </Select>
                      <div style={{ marginTop: 8 }}>
                        <Text style={{ color: "#888888", fontSize: "11px" }}>
                          Fast Program to Queue
                        </Text>
                      </div>
                    </Card>
                  </Col>
                  <Col span={24}>
                    <Card
                      title="RP Transmit Mode"
                      className="info-card"
                      size="small"
                    >
                      <Select
                        defaultValue="Any Preparation"
                        style={{ width: "100%" }}
                        size="small"
                      >
                        <Option value="any">Any Preparation</Option>
                      </Select>
                    </Card>
                  </Col>
                  <Col span={24}>
                    <Card
                      title="Body Part and Laterality"
                      className="info-card"
                      size="small"
                    >
                      <Row gutter={8}>
                        <Col span={12}>
                          <div className="form-field">
                            <label>Body Part</label>
                            <Select
                              placeholder="Select body part"
                              size="small"
                              style={{ width: "100%" }}
                            >
                              <Option value="brain">Brain</Option>
                              <Option value="spine">Spine</Option>
                            </Select>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className="form-field">
                            <label>Laterality</label>
                            <Select
                              placeholder="Select laterality"
                              size="small"
                              style={{ width: "100%" }}
                            >
                              <Option value="left">Left</Option>
                              <Option value="right">Right</Option>
                              <Option value="bilateral">Bilateral</Option>
                            </Select>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col span={24}>
                    <Card
                      title="Patient Orientation"
                      className="info-card"
                      size="small"
                    >
                      <div style={{ textAlign: "center" }}>
                        <Button type="primary" size="small">
                          Supine
                        </Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Action Buttons */}
            <div className="action-buttons" style={{ marginTop: 16 }}>
              <Space>
                <Button icon={<SaveOutlined />} size="small">
                  Save
                </Button>
                <Button icon={<UndoOutlined />} size="small">
                  Cancel
                </Button>
                <Button type="primary" icon={<CheckOutlined />} size="small">
                  Finish
                </Button>
                <Button size="small">Live Data</Button>
                <Button size="small">Prep Registry</Button>
              </Space>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Scheduler;
