import React, { useState } from 'react';
import { Button, Form, Input, message, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      message.success('Login successful!');
      navigate('/dashboard');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <div className="logo-header">
          <h1>CareerGenius</h1>
          <p>AI-Powered Career Guidance</p>
        </div>

        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Email" 
              size="large" 
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              prefix={<LockOutlined />} 
              placeholder="Password" 
              size="large" 
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              size="large"
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="auth-footer">
          New user? <a href="/register">Create account</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;