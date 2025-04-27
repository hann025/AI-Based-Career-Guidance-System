import React from 'react';
import { Card, Avatar, Form, Input, Button, Typography, Divider, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, EditOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const { Title, Text } = Typography;

const Profile = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Profile updated:', values);
    message.success('Profile updated successfully!');
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <Card className="profile-glass-card">
          {/* Header with Glass Effect */}
          <div className="profile-header">
            <Button 
              type="text" 
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/dashboard')}
              className="back-button"
            >
              Dashboard
            </Button>
            <Title level={3} className="profile-title">
              <span className="gradient-text">My Profile</span>
            </Title>
          </div>

          {/* Profile Content */}
          <div className="profile-content">
            <Avatar 
              size={128} 
              icon={<UserOutlined />} 
              className="profile-avatar"
              style={{
                background: 'linear-gradient(135deg, #6e8efb, #a777e3)'
              }}
            />
            
            <Form
              form={form}
              name="profile_form"
              onFinish={onFinish}
              layout="vertical"
              className="profile-form"
            >
              <Form.Item
                name="username"
                label={<Text strong>Username</Text>}
                initialValue="Hannet"
              >
                <Input 
                  prefix={<UserOutlined className="form-icon" />} 
                  className="profile-input"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={<Text strong>Email</Text>}
                initialValue="myemail@gmail.com"
                rules={[{ type: 'email', message: 'Please enter a valid email!' }]}
              >
                <Input 
                  prefix={<MailOutlined className="form-icon" />} 
                  className="profile-input"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={<Text strong>Password</Text>}
                rules={[{ min: 6, message: 'Password must be at least 6 characters!' }]}
              >
                <Input.Password 
                  prefix={<LockOutlined className="form-icon" />} 
                  className="profile-input"
                  placeholder="●●●●●●●●" 
                />
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  icon={<EditOutlined />}
                  className="save-button"
                  size="large"
                >
                  Update Profile
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;