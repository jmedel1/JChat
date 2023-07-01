import React, { useState, useEffect } from 'react';

const Home = () => {
  const homepageStyle = {
    backgroundColor: '#2196F3', // Bright blue
    color: '#FFFFFF', // White
    padding: '20px',
    fontFamily: 'Montserrat, sans-serif', // Mexican-inspired font
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: 'Pacifico, cursive', // Mexican-inspired font for heading
  };

  const interactPostsStyle = {
    marginBottom: '20px',
  };

  const postStyle = {
    backgroundColor: '#03A9F4', // Light blue
    color: '#212121', // Black
    padding: '10px',
    marginBottom: '10px',
  };

  const postActionsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  };

  const footerStyle = {
    textAlign: 'center',
    color: '#FFFFFF', // White
  };

  const [topLikedPosts, setTopLikedPosts] = useState([]);
  const [topCommentedPosts, setTopCommentedPosts] = useState([]);

  useEffect(() => {
    const fetchTopLikedPosts = async () => {
      try {
        const response = await fetch('/api/posts/top-liked');
        const data = await response.json();
        setTopLikedPosts(data);
      } catch (error) {
        console.error('Error fetching top liked posts:', error);
      }
    };

    const fetchTopCommentedPosts = async () => {
      try {
        const response = await fetch('/api/posts/top-commented');
        const data = await response.json();
        setTopCommentedPosts(data);
      } catch (error) {
        console.error('Error fetching top commented posts:', error);
      }
    };

    fetchTopLikedPosts();
    fetchTopCommentedPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}/like`, {
        method: 'PUT',
      });
      const data = await response.json();
      if (response.ok) {
        // Update the state with the updated post
        setTopLikedPosts((prevPosts) =>
          prevPosts.map((post) => (post._id === data._id ? data : post))
        );
      } else {
        console.error('Error liking the post:', data.error);
      }
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  const handleComment = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}/comment`, {
        method: 'PUT',
      });
      const data = await response.json();
      if (response.ok) {
        // Update the state with the updated post
        setTopCommentedPosts((prevPosts) =>
          prevPosts.map((post) => (post._id === data._id ? data : post))
        );
      } else {
        console.error('Error commenting on the post:', data.error);
      }
    } catch (error) {
      console.error('Error commenting on the post:', error);
    }
  };

  return (
    <div style={homepageStyle} className="homepage">
      <header style={headingStyle}>
        <h1>Welcome to JChat</h1>
        <p>Create and Interact with Posts</p>
      </header>
      <main>
        <section style={interactPostsStyle} className="interact-posts">
          <h2>Interact with Posts</h2>
          <div>
            <h3>Top Liked Posts</h3>
            {topLikedPosts.map((post) => (
              <div key={post._id} style={postStyle} className="post">
                <p>{post.title}</p>
                <div style={postActionsStyle} className="post-actions">
                  <button onClick={() => handleLike(post._id)}>Like ({post.likes})</button>
                  <button onClick={() => handleComment(post._id)}>Comment</button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3>Top Commented Posts</h3>
            {topCommentedPosts.map((post) => (
              <div key={post._id} style={postStyle} className="post">
                <p>{post.title}</p>
                <div style={postActionsStyle} className="post-actions">
                  <button onClick={() => handleLike(post._id)}>Like ({post.likes})</button>
                  <button onClick={() => handleComment(post._id)}>Comment</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer style={footerStyle}>
        <p>&copy; 2023 JChat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
