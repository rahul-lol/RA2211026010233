import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopUsers from './TopUsers';
import TrendingPosts from './TrendingPosts';
import Feed from './Feed';
import Home from './Home';  // Import the Home component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Define a route for the root path (/) */}
        <Route path="/" element={<Home />} />
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending-posts" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;
