import React from 'react';

const Sidebar = () => {
  return (
    <aside className="border-end">
      <nav className="nav flex-column">
        <div className="nav-item active">
          <a href="#" className="nav-link d-flex align-items-center">
            <img src="/dashboardicon.svg" alt="Dashboard Icon" className="me-2" />
            Dashboard
          </a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <img src="/ordersicon.svg" alt="Orders Icon" className="me-2" />
            Orders
          </a>
        </div>
        {/* Add more nav items as needed */}
      </nav>
    </aside>
  );
};

export default Sidebar;