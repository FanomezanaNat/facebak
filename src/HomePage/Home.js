import { useEffect, useState } from 'react';
import './Home.css';
import Post from '../components/Post';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch('http://localhost:8080/posts');
          const postsData = await response.json();
          setPosts(postsData);
        } catch (error) {
          console.error('Error during posts fetch', error);
        }
      };
  
      fetchPosts();
    }, []);
  
    
    return (
        <div className="feed_thread">
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Home;