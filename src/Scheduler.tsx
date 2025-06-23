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
            {/* Main Layout - Three Column Structure */}
            <Row gutter={8}>
              {/* Left Column - vidOps Patient Details */}
              <Col span={8}>
                <Card
                  title="vidOps"
                  className="info-card patient-details-card"
                  style={{ height: "100%" }}
                >
                  <div className="patient-form">
                    <div className="form-field">
                      <label>Last Name</label>
                      <Input size="small" defaultValue="vidOps" />
                    </div>
                    <div className="form-field">
                      <label>First Name</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Title</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Suffix</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Middle Name</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Patient ID</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Date of Birth</label>
                      <Row gutter={4}>
                        <Col span={16}>
                          <DatePicker
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="MM/DD/YYYY"
                          />
                        </Col>
                        <Col span={8}>
                          <Text style={{ fontSize: "11px" }}>MM/DD/YYYY</Text>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-field">
                      <label>Age</label>
                      <Row gutter={4}>
                        <Col span={8}>
                          <Input size="small" />
                        </Col>
                        <Col span={16}>
                          <Select
                            size="small"
                            defaultValue="Year(s)"
                            style={{ width: "100%" }}
                          >
                            <Option value="years">Year(s)</Option>
                            <Option value="months">Month(s)</Option>
                          </Select>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-field">
                      <label>Sex</label>
                      <Row gutter={4}>
                        <Col span={8}>
                          <Input size="small" />
                        </Col>
                        <Col span={8}>
                          <Select
                            size="small"
                            defaultValue="ft"
                            style={{ width: "100%" }}
                          >
                            <Option value="ft">ft</Option>
                            <Option value="cm">cm</Option>
                          </Select>
                        </Col>
                        <Col span={8}>
                          <Select
                            size="small"
                            defaultValue="in"
                            style={{ width: "100%" }}
                          >
                            <Option value="in">in</Option>
                            <Option value="cm">cm</Option>
                          </Select>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-field">
                      <label>Weight</label>
                      <Row gutter={4}>
                        <Col span={8}>
                          <Input size="small" />
                        </Col>
                        <Col span={8}>
                          <Select
                            size="small"
                            defaultValue="lbs"
                            style={{ width: "100%" }}
                          >
                            <Option value="lbs">lbs</Option>
                            <Option value="kg">kg</Option>
                          </Select>
                        </Col>
                        <Col span={8}>
                          <Select
                            size="small"
                            defaultValue="U.S."
                            style={{ width: "100%" }}
                          >
                            <Option value="us">U.S.</Option>
                            <Option value="metric">Metric</Option>
                          </Select>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* Middle Column - Medical & Examination Info */}
              <Col span={8}>
                <div className="column-container">
                  {/* Medical Information */}
                  <Card
                    title="Medical Information"
                    className="info-card compact-card"
                    size="small"
                  >
                    <div className="form-field">
                      <label>Admitting Diagnosis</label>
                      <Input.TextArea rows={3} size="small" />
                    </div>
                  </Card>

                  {/* Alerts */}
                  <Card
                    title="Alerts"
                    className="info-card compact-card"
                    size="small"
                  >
                    <div className="form-field">
                      <label>Medical Alerts</label>
                      <Input.TextArea rows={3} size="small" />
                    </div>
                    <div className="form-field">
                      <label>Allergies</label>
                      <Input.TextArea rows={3} size="small" />
                    </div>
                  </Card>

                  {/* Institution */}
                  <Card
                    title="Institution"
                    className="info-card compact-card"
                    size="small"
                  >
                    <div className="form-field">
                      <label>Institution Name</label>
                      <Select
                        defaultValue="UCLA Psychology - Psychiatr"
                        size="small"
                        style={{ width: "100%" }}
                      >
                        <Option value="ucla">
                          UCLA Psychology - Psychiatr
                        </Option>
                      </Select>
                    </div>
                    <div className="form-field">
                      <label>Performing Physician</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Referring Physician</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Requesting Physician</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Operator</label>
                      <Input.TextArea rows={3} size="small" />
                    </div>
                  </Card>
                </div>
              </Col>

              {/* Right Column - Examination & Program Info */}
              <Col span={8}>
                <div className="column-container">
                  {/* Examination Information */}
                  <Card
                    title="Examination Information"
                    className="info-card compact-card"
                    size="small"
                  >
                    <div className="form-field">
                      <label>Procedure</label>
                      <Select
                        placeholder="Select procedure"
                        size="small"
                        style={{ width: "100%" }}
                      >
                        <Option value="proc1">Procedure 1</Option>
                      </Select>
                    </div>
                    <div className="form-field">
                      <label>Accession No.</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Req. Proc. ID</label>
                      <Input size="small" />
                    </div>
                    <div className="form-field">
                      <label>Study Description</label>
                      <Input size="small" defaultValue="LEE 32 Channel" />
                    </div>
                    <div className="form-field">
                      <label>Study Comments</label>
                      <Input.TextArea rows={3} size="small" />
                    </div>
                  </Card>

                  {/* Program Selection */}
                  <Card
                    title="Program Selection"
                    className="info-card compact-card"
                    size="small"
                  >
                    <Select
                      defaultValue="USER > LEE > 32 Channel > Amy_Pilot_NoMB"
                      style={{ width: "100%" }}
                      size="small"
                    >
                      <Option value="program1">
                        USER &gt; LEE &gt; 32 Channel &gt; Amy_Pilot_NoMB
                      </Option>
                    </Select>
                    <div style={{ marginTop: 4 }}>
                      <Switch size="small" defaultChecked />
                      <span
                        style={{
                          marginLeft: 8,
                          fontSize: "11px",
                          color: "#cccccc",
                        }}
                      >
                        Load Program to Queue
                      </span>
                    </div>
                  </Card>

                  {/* RF Transmit Mode */}
                  <Card
                    title="RF Transmit Mode"
                    className="info-card compact-card"
                    size="small"
                  >
                    <Select
                      defaultValue="Any Polarization"
                      style={{ width: "100%" }}
                      size="small"
                    >
                      <Option value="any">Any Polarization</Option>
                    </Select>
                  </Card>

                  {/* Body Part and Laterality */}
                  <Card
                    title="Body Part and Laterality"
                    className="info-card compact-card"
                    size="small"
                  >
                    <Row gutter={8}>
                      <Col span={12}>
                        <div className="form-field">
                          <label>Brain</label>
                          <Select
                            defaultValue="Select"
                            size="small"
                            style={{ width: "100%" }}
                          >
                            <Option value="brain">Brain</Option>
                            <Option value="select">Select</Option>
                          </Select>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="form-field">
                          <label>Unspecified</label>
                          <Select
                            defaultValue="Unspecified"
                            size="small"
                            style={{ width: "100%" }}
                          >
                            <Option value="unspec">Unspecified</Option>
                          </Select>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={8} style={{ marginTop: 4 }}>
                      <Col span={12}>
                        <div className="form-field">
                          <label>Select</label>
                          <Select
                            defaultValue="Select"
                            size="small"
                            style={{ width: "100%" }}
                          >
                            <Option value="select">Select</Option>
                          </Select>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="form-field">
                          <label>Unspecified</label>
                          <Select
                            defaultValue="Unspecified"
                            size="small"
                            style={{ width: "100%" }}
                          >
                            <Option value="unspec">Unspecified</Option>
                          </Select>
                        </div>
                      </Col>
                    </Row>
                  </Card>

                  {/* Patient Orientation */}
                  <Card
                    title="Patient Orientation"
                    className="info-card compact-card"
                    size="small"
                  >
                    <Select
                      defaultValue="Select"
                      style={{ width: "100%" }}
                      size="small"
                    >
                      <Option value="select">Select</Option>
                      <Option value="supine">Supine</Option>
                      <Option value="prone">Prone</Option>
                    </Select>
                  </Card>
                </div>
              </Col>
            </Row>

            {/* Bottom Notification Bar */}
            <div
              className="notification-bar"
              style={{
                marginTop: 6,
                padding: "6px 16px",
                background: "#2d2d2d",
                borderRadius: "2px",
                border: "1px solid #444444",
              }}
            >
              <Row justify="end" align="middle">
                <Col>
                  <Space size="small">
                    <Button
                      size="small"
                      style={{
                        minWidth: "60px",
                        fontSize: "11px",
                        background: "#555555",
                        borderColor: "#666666",
                        color: "#ffffff",
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      size="small"
                      style={{
                        minWidth: "60px",
                        fontSize: "11px",
                        background: "#555555",
                        borderColor: "#666666",
                        color: "#ffffff",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="small"
                      style={{
                        minWidth: "60px",
                        fontSize: "11px",
                        background: "#555555",
                        borderColor: "#666666",
                        color: "#ffffff",
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      size="small"
                      style={{
                        minWidth: "80px",
                        fontSize: "11px",
                        background: "#555555",
                        borderColor: "#666666",
                        color: "#ffffff",
                      }}
                    >
                      Live Data
                    </Button>
                    <Button
                      size="small"
                      style={{
                        minWidth: "90px",
                        fontSize: "11px",
                        background: "#555555",
                        borderColor: "#666666",
                        color: "#ffffff",
                      }}
                    >
                      Prep Studies
                    </Button>
                    <Button
                      type="primary"
                      size="small"
                      style={{
                        background: "#ff6b35",
                        borderColor: "#ff6b35",
                        minWidth: "60px",
                        fontSize: "11px",
                      }}
                    >
                      Event
                    </Button>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Scheduler;
