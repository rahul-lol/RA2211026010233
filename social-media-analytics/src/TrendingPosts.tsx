import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingPosts: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/top-posts') // Make sure this matches your backend API
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Trending Posts</h1>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={index}>{post.content} - {post.comments} comments</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
