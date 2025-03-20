import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed: React.FC = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/feed') // Make sure this matches your backend API
      .then(response => {
        setFeed(response.data);
      })
      .catch(error => console.error('Error fetching feed:', error));
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {feed.map((post: any, index: number) => (
          <li key={index}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
