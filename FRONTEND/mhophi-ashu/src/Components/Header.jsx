import React from 'react';

const Header = () => {
  return (
    <header className="bg-light py-3 border-bottom">
      <div className="container d-flex align-items-center justify-content-between">
        <div style={{display: 'flex',justifyContent: 'flex-end' }}>
          <img src="/mask-group@2x.png" alt="Logo" className="me-3" />
          <img src="/group-4.svg" alt="Header Item" className="me-3" />
          <img src="/group-3.svg" alt="Header Inner" />
        </div>
        <div className="d-flex align-items-center">
          <div className="me-3 position-relative">
            <input type="text" className="form-control" placeholder="Search for something" />
            <img src="/magnifyingglass-1.svg" alt="Search Icon" className="position-absolute end-0 top-50 translate-middle-y me-2" />
          </div>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <img src="/frame.svg" alt="Dashboard Icon" />
              <span className="ms-2">Dashboard</span>
            </div>
            <span>Order's Product Details</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;