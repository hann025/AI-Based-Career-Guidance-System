import React from 'react';
import './Test.css';

const TestComponent = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'lightblue',
      color: 'black',
      padding: '20px',
      overflow: 'auto'
    }}>
      <h1>TEST COMPONENT - THIS MUST APPEAR</h1>
      <p>If you can see this, your React setup is working</p>
      {Array(50).fill().map((_, i) => (
        <div key={i}>Scrollable item {i + 1}</div>
      ))}
    </div>
  );
};

export default TestComponent;