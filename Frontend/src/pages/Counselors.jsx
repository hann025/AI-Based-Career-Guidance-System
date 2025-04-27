import React from 'react';
import { Card, Avatar, List, Typography, Button, Tag } from 'antd';
import { UserOutlined, MessageOutlined, CalendarOutlined, ArrowLeftOutlined, StarFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Counselors.css';

const { Title, Text } = Typography;

const Counselors = () => {
  const navigate = useNavigate();

  const counselorsData = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'Career Transition',
      experience: '10+ years',
      rating: 4.9,
      availability: 'Mon-Fri, 9AM-5PM',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    // ... (keep your existing counselors data)
  ];

  return (
    <div className="counselors-wrapper">
      <div className="counselors-container">
        <div className="counselors-glass-card">
          {/* Header */}
          <div className="counselors-header">
            <Button 
              type="text" 
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/dashboard')}
              className="back-button"
            >
              Dashboard
            </Button>
            <Title level={3} className="page-title">
              <span className="gradient-text">Connect with Counselors</span>
            </Title>
          </div>

          {/* Counselors List */}
          <div className="counselors-list-container">
            <List
              itemLayout="horizontal"
              dataSource={counselorsData}
              renderItem={(counselor) => (
                <div className="counselor-card">
                  <List.Item.Meta
                    avatar={<Avatar size={64} src={counselor.image} />}
                    title={<Text strong>{counselor.name}</Text>}
                    description={
                      <>
                        <Tag color="blue">{counselor.specialization}</Tag>
                        <div className="counselor-details">
                          <Text type="secondary">{counselor.experience} experience</Text>
                          <div className="rating">
                            <StarFilled style={{ color: '#ffc107' }} />
                            <Text strong>{counselor.rating}</Text>
                          </div>
                          <Text>Available: {counselor.availability}</Text>
                        </div>
                      </>
                    }
                  />
                  <div className="action-buttons">
                    <Button 
                      type="primary" 
                      icon={<MessageOutlined />}
                      className="message-button"
                    >
                      Message
                    </Button>
                    <Button 
                      icon={<CalendarOutlined />}
                      className="schedule-button"
                    >
                      Schedule
                    </Button>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselors;