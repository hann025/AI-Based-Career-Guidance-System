import React from "react";
import { Layout, Typography, Card, Button, Space, Steps, Progress, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  RobotOutlined,
  FormOutlined,
  MessageOutlined,
  UserOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import "./Assessment.css";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Step } = Steps;

const Assessment = () => {
  return (
    <Layout className="app-layout">
      {/* Sidebar */}
      <Sider width={200} className="modern-sidebar">
        <div className="logo">
          <span className="logo-text">CareerGenius</span>
        </div>
        <Menu mode="inline" className="modern-menu">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<RobotOutlined />}>
            <Link to="/ask-ai">AI Assistant</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FormOutlined />}>
            <Link to="/assessments">Assessments</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<MessageOutlined />}>
            <Link to="/counselor">Counselor</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Area */}
      <Layout className="main-layout">
        {/* Header */}
        <Header className="main-header">
          <Space size="large">
            <Text className="weather-display">
              <span className="temperature">29°C</span>
              <span className="weather-condition">Partly sunny</span>
            </Text>
            <div className="user-avatar">
              <UserOutlined />
            </div>
          </Space>
        </Header>

        {/* Hero Section */}
        <Content className="assessment-hero">
          <div className="assessment-intro">
            <Title level={1} className="assessment-title">
              Career Discovery Assessment
            </Title>
            <Text className="assessment-subtitle">
              Answer a few quick questions to personalize your career journey.
            </Text>
          </div>
        </Content>

        {/* Assessment Cards */}
        <Content className="assessment-content">
          <div className="assessment-container">
            <Card className="assessment-card">
              <Title level={4}>1. What are your strongest skills?</Title>
              <div className="choices-grid">
                {["Problem Solving", "Creativity", "Leadership", "Communication"].map((skill, i) => (
                  <Button key={i} className="choice-button">{skill}</Button>
                ))}
              </div>
            </Card>

            <Card className="assessment-card">
              <Title level={4}>2. Which of these areas interest you most?</Title>
              <div className="choices-grid">
                {["Technology", "Business", "Healthcare", "Design"].map((area, i) => (
                  <Button key={i} className="choice-button">{area}</Button>
                ))}
              </div>
            </Card>

            <Card className="assessment-card">
              <Title level={4}>3. Your preferred work style?</Title>
              <Steps
                current={1}
                labelPlacement="vertical"
                items={[
                  { title: "Teamwork" },
                  { title: "Independently" },
                  { title: "Remote" },
                  { title: "On-site" },
                ]}
              />
            </Card>

            <Card className="assessment-card">
              <div className="submit-section">
                <Text className="progress-label">Progress</Text>
                <Progress percent={60} strokeColor="#6e8efb" />
                <Button type="primary" className="submit-button">
                  Submit Answers
                </Button>
              </div>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Assessment;
