import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <main className="container py-4">
          {/* Add your main content here */}
          <h1>Welcome to your App!</h1>
          <p>This is where you can add your main content.</p>
        </main>
      </div>
    </div>
  );
};

export default App;