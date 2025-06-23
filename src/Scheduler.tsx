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
            {/* Patient Registration Section - Full Width */}
            <Card
              title="vidOps"
              className="info-card patient-registration-card"
              style={{ marginBottom: 16 }}
            >
              <Form layout="horizontal" size="small">
                <Row gutter={[16, 8]}>
                  <Col span={6}>
                    <Form.Item
                      label="Last Name"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="First Name"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Middle Name"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="DOB"
                      labelCol={{ span: 6 }}
                      wrapperCol={{ span: 18 }}
                    >
                      <DatePicker size="small" style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 8]}>
                  <Col span={6}>
                    <Form.Item
                      label="Patient ID"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="MRN"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Accession No."
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Study ID"
                      labelCol={{ span: 6 }}
                      wrapperCol={{ span: 18 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 8]}>
                  <Col span={6}>
                    <Form.Item
                      label="Visit ID"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Age"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Gender"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Select size="small" style={{ width: "100%" }}>
                        <Option value="M">M</Option>
                        <Option value="F">F</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Weight/Height"
                      labelCol={{ span: 6 }}
                      wrapperCol={{ span: 18 }}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>

            {/* Main Content Grid */}
            <Row gutter={16}>
              {/* Left Column */}
              <Col span={12}>
                {/* Medical Information */}
                <Card
                  title="Medical Information"
                  className="info-card"
                  style={{ marginBottom: 16 }}
                >
                  <Form layout="vertical" size="small">
                    <Form.Item
                      label="Admitting Diagnosis"
                      style={{ marginBottom: 12 }}
                    >
                      <Select placeholder="Select diagnosis" size="small">
                        <Option value="dx1">Diagnosis 1</Option>
                        <Option value="dx2">Diagnosis 2</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Other Diagnosis"
                      style={{ marginBottom: 0 }}
                    >
                      <Select placeholder="Select other" size="small">
                        <Option value="other1">Other 1</Option>
                      </Select>
                    </Form.Item>
                  </Form>
                </Card>

                {/* Alerts */}
                <Card
                  title="Alerts"
                  className="info-card"
                  style={{ marginBottom: 16 }}
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

                {/* Institution */}
                <Card title="Institution" className="info-card">
                  <Form layout="vertical" size="small">
                    <Form.Item
                      label="Performing Physician"
                      style={{ marginBottom: 12 }}
                    >
                      <Select
                        defaultValue="SIEMENS Psychiatry - Physician 1"
                        size="small"
                      >
                        <Option value="physician1">
                          SIEMENS Psychiatry - Physician 1
                        </Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Referring Physician"
                      style={{ marginBottom: 12 }}
                    >
                      <Select placeholder="Select physician" size="small">
                        <Option value="ref1">Referring Physician 1</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Requesting Physician"
                      style={{ marginBottom: 0 }}
                    >
                      <Select placeholder="Select physician" size="small">
                        <Option value="req1">Requesting Physician 1</Option>
                      </Select>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>

              {/* Right Column */}
              <Col span={12}>
                {/* Examination Information */}
                <Card
                  title="Examination Information"
                  className="info-card"
                  style={{ marginBottom: 16 }}
                >
                  <Form layout="vertical" size="small">
                    <Form.Item
                      label="Exam Technique"
                      style={{ marginBottom: 12 }}
                    >
                      <Select placeholder="Select technique" size="small">
                        <Option value="tech1">Technique 1</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Scan Description"
                      style={{ marginBottom: 12 }}
                    >
                      <Input placeholder="Enter description" size="small" />
                    </Form.Item>
                    <Form.Item
                      label="Study Comments"
                      style={{ marginBottom: 12 }}
                    >
                      <Input.TextArea
                        rows={2}
                        placeholder="Enter comments"
                        size="small"
                      />
                    </Form.Item>
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
                  </Form>
                </Card>

                {/* Program Selection */}
                <Card
                  title="Program Selection"
                  className="info-card"
                  style={{ marginBottom: 16 }}
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

                {/* RP Transmit Mode */}
                <Card
                  title="RP Transmit Mode"
                  className="info-card"
                  style={{ marginBottom: 16 }}
                >
                  <Select
                    defaultValue="Any Preparation"
                    style={{ width: "100%" }}
                    size="small"
                  >
                    <Option value="any">Any Preparation</Option>
                  </Select>
                </Card>

                {/* Body Part and Laterality */}
                <Card
                  title="Body Part and Laterality"
                  className="info-card"
                  style={{ marginBottom: 16 }}
                >
                  <Form layout="vertical" size="small">
                    <Row gutter={8}>
                      <Col span={12}>
                        <Form.Item
                          label="Body Part"
                          style={{ marginBottom: 8 }}
                        >
                          <Select placeholder="Select body part" size="small">
                            <Option value="brain">Brain</Option>
                            <Option value="spine">Spine</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Laterality"
                          style={{ marginBottom: 8 }}
                        >
                          <Select placeholder="Select laterality" size="small">
                            <Option value="left">Left</Option>
                            <Option value="right">Right</Option>
                            <Option value="bilateral">Bilateral</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>

                {/* Patient Orientation */}
                <Card title="Patient Orientation" className="info-card">
                  <div style={{ textAlign: "center" }}>
                    <Button type="primary" size="small">
                      Supine
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>

            {/* Action Buttons */}
            <div className="action-buttons" style={{ marginTop: 24 }}>
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
