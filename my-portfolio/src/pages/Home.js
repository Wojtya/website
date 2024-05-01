import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

import './home.css'; // Assuming you'll create a CSS file for styling

function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click and navigate to projects page
  const handleExploreClick = () => {
    navigate('/projects'); // Navigate to projects page
  };

  return (
    <div className="home">
      <div className="content">
        <h1>Josemaria Escriva</h1>
        <p>Check out my garage!</p>
        <button className="explore-button" onClick={handleExploreClick}>Explore</button>
      </div>
    </div>
  );
}

export default Home;
