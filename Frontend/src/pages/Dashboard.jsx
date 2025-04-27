import React from 'react';
import { Layout, Menu, Card, Progress, Typography, Space } from 'antd';
import { 
  RobotOutlined, DashboardOutlined, FormOutlined, 
  UserOutlined, MessageOutlined, RiseOutlined,
  BulbOutlined, ScheduleOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
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

        {/* Full-Page Welcome Section */}
        <Content className="welcome-fullpage">
          <div className="hero-content">
            <Title level={1} className="hero-title">
              Welcome to Your Career Journey
            </Title>
            <Text className="hero-subtitle">
              Discover personalized career paths powered by AI
            </Text>
            <Link to="/assessments" className="cta-button">
              Get Started
            </Link>
          </div>
        </Content>

        {/* Dashboard Content */}
        <Content className="main-content">
          <div className="content-container">
            {/* Card Grid */}
            <div className="card-grid">
              <Card className="dashboard-card">
                <Space direction="vertical" size={16}>
                  <Title level={4} className="card-title">
                    <span className="icon-circle"><RiseOutlined /></span>
                    Career Progress
                  </Title>
                  <Progress 
                    percent={78} 
                    strokeColor="#6e8efb"
                    trailColor="#ecf0f1"
                    strokeWidth={12}
                  />
                  <Text className="progress-text">78/100 points</Text>
                </Space>
              </Card>

              <Card className="dashboard-card">
                <Title level={4} className="card-title">
                  <span className="icon-circle"><BulbOutlined /></span>
                  Career Roadmap
                </Title>
                <div className="roadmap-container">
                  <div className="roadmap-line"></div>
                  <div className="milestones">
                    <div className="milestone current">1</div>
                    <div className="milestone">2</div>
                    <div className="milestone future">3</div>
                  </div>
                  <div className="milestone-labels">
                    <Text>Current Role</Text>
                    <Text>Skills Upgrade</Text>
                    <Text>Target Role</Text>
                  </div>
                </div>
              </Card>

              <Card className="dashboard-card">
                <Title level={4} className="card-title">
                  <span className="icon-circle"><ScheduleOutlined /></span>
                  Upcoming Tasks
                </Title>
                <div className="task-list">
                  {['Complete skills assessment', 'Schedule counselor meeting', 'Explore 3 new career paths'].map((task, i) => (
                    <div key={i} className="task-item">
                      <div className="task-bullet"></div>
                      <Text>{task}</Text>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;