import React from 'react';

const Home = () => {
  const homepageStyle = {
    backgroundColor: 'lightgray',
    color: 'gold',
    padding: '20px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const createPostStyle = {
    marginBottom: '20px',
  };

  const interactPostsStyle = {
    marginBottom: '20px',
  };

  const postStyle = {
    backgroundColor: 'gold',
    color: 'lightgray',
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
    color: 'gold',
  };

  return (
    <div style={homepageStyle} className="homepage">
      <header style={headingStyle}>
        <h1>Welcome to JChat</h1>
        <p>Create and Interact with Posts</p>
      </header>
      <main>
        <section style={createPostStyle} className="create-post">
          <h2>Create a Post</h2>
          <form>
            <textarea placeholder="Write your post here"></textarea>
            <button type="submit">Post</button>
          </form>
        </section>
        <section style={interactPostsStyle} className="interact-posts">
          <h2>Interact with Posts</h2>
          <div style={postStyle} className="post">
            <p>This is a post made by someone else.</p>
            <div style={postActionsStyle} className="post-actions">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
          {/* More posts can be added here */}
        </section>
      </main>
      <footer style={footerStyle}>
        <p>&copy; 2023 JChat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
