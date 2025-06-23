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
            {/* Patient Registration Section */}
            <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
              <Col span={24}>
                <Card
                  title="vidOps"
                  className="info-card patient-registration-card"
                >
                  <Form layout="vertical" size="small">
                    <Row gutter={8}>
                      <Col span={4}>
                        <Form.Item
                          label="Last Name"
                          style={{ marginBottom: 8 }}
                        >
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          label="First Name"
                          style={{ marginBottom: 8 }}
                        >
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          label="Middle Name"
                          style={{ marginBottom: 8 }}
                        >
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item label="DOB" style={{ marginBottom: 8 }}>
                          <DatePicker size="small" style={{ width: "100%" }} />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item label="Age" style={{ marginBottom: 8 }}>
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item label="Gender" style={{ marginBottom: 8 }}>
                          <Select size="small" style={{ width: "100%" }}>
                            <Option value="M">M</Option>
                            <Option value="F">F</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col span={4}>
                        <Form.Item
                          label="Patient ID"
                          style={{ marginBottom: 8 }}
                        >
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item label="MRN" style={{ marginBottom: 8 }}>
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          label="Accession No."
                          style={{ marginBottom: 8 }}
                        >
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item label="Study ID" style={{ marginBottom: 8 }}>
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item label="Visit ID" style={{ marginBottom: 8 }}>
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          label="Weight/Height"
                          style={{ marginBottom: 8 }}
                        >
                          <Input size="small" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              {/* Medical Information Section */}
              <Col xs={24} md={12}>
                <Card title="Medical Information" className="info-card">
                  <Form form={form} layout="vertical" size="small">
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="Admitting Diagnosis">
                          <Select placeholder="Select diagnosis">
                            <Option value="dx1">Diagnosis 1</Option>
                            <Option value="dx2">Diagnosis 2</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Other Diagnosis">
                          <Select placeholder="Select other">
                            <Option value="other1">Other 1</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </Col>

              {/* Examination Information Section */}
              <Col xs={24} md={12}>
                <Card title="Examination Information" className="info-card">
                  <Form layout="vertical" size="small">
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="Exam Technique">
                          <Select placeholder="Select technique">
                            <Option value="tech1">Technique 1</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Scan Description">
                          <Input placeholder="Enter description" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="Study Comments">
                          <Input.TextArea
                            rows={2}
                            placeholder="Enter comments"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <div className="checkbox-group">
                          <div>
                            <Switch size="small" /> SEE I/O Channel
                          </div>
                          <div>
                            <Switch size="small" /> Body Coil/MRS
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </Col>

              {/* Alerts Section */}
              <Col xs={24} md={8}>
                <Card title="Alerts" className="info-card alerts-card">
                  <div className="alert-item">
                    <Text type="secondary">Medical Alert:</Text>
                    <div className="alert-content">No alerts</div>
                  </div>
                  <div className="alert-item">
                    <Text type="secondary">Allergies:</Text>
                    <div className="alert-content">No allergies</div>
                  </div>
                </Card>
              </Col>

              {/* Institution Section */}
              <Col xs={24} md={16}>
                <Card title="Institution" className="info-card">
                  <Form layout="vertical" size="small">
                    <Row gutter={16}>
                      <Col span={8}>
                        <Form.Item label="Performing Physician">
                          <Select defaultValue="SIEMENS Psychiatry - Physician 1">
                            <Option value="physician1">
                              SIEMENS Psychiatry - Physician 1
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Referring Physician">
                          <Select placeholder="Select physician">
                            <Option value="ref1">Referring Physician 1</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Requesting Physician">
                          <Select placeholder="Select physician">
                            <Option value="req1">Requesting Physician 1</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </Col>

              {/* Program Selection */}
              <Col xs={24} md={12}>
                <Card title="Program Selection" className="info-card">
                  <Select
                    defaultValue="CHILD > 18E > 22 Channel + Amy_Pilot_Subtle"
                    style={{ width: "100%" }}
                  >
                    <Option value="program1">
                      CHILD &gt; 18E &gt; 22 Channel + Amy_Pilot_Subtle
                    </Option>
                  </Select>
                  <div style={{ marginTop: 8 }}>
                    <Text type="secondary">Fast Program to Queue</Text>
                  </div>
                </Card>
              </Col>

              {/* RP Transmit Mode */}
              <Col xs={24} md={12}>
                <Card title="RP Transmit Mode" className="info-card">
                  <Select
                    defaultValue="Any Preparation"
                    style={{ width: "100%" }}
                  >
                    <Option value="any">Any Preparation</Option>
                  </Select>
                </Card>
              </Col>

              {/* Body Part and Laterality */}
              <Col xs={24} md={12}>
                <Card title="Body Part and Laterality" className="info-card">
                  <Form layout="vertical" size="small">
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="Body Part">
                          <Select placeholder="Select body part">
                            <Option value="brain">Brain</Option>
                            <Option value="spine">Spine</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Laterality">
                          <Select placeholder="Select laterality">
                            <Option value="left">Left</Option>
                            <Option value="right">Right</Option>
                            <Option value="bilateral">Bilateral</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </Col>

              {/* Patient Orientation */}
              <Col xs={24} md={12}>
                <Card title="Patient Orientation" className="info-card">
                  <div className="orientation-selector">
                    <Button type="primary" size="small">
                      Supine
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>

            {/* Action Buttons */}
            <div className="action-buttons">
              <Space>
                <Button icon={<SaveOutlined />}>Save</Button>
                <Button icon={<UndoOutlined />}>Cancel</Button>
                <Button type="primary" icon={<CheckOutlined />}>
                  Finish
                </Button>
                <Button>Live Data</Button>
                <Button>Prep Registry</Button>
              </Space>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Scheduler;
