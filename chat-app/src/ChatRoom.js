import React, { useState } from 'react';

const ChatRoom = ({ messages }) => {
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const handleComment = (messageId, comment) => {
    if (comment.trim()) {
      setComments((prevComments) => ({
        ...prevComments,
        [messageId]: [...(prevComments[messageId] || []), comment]
      }));
    }
  };

  const handleLike = (messageId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [messageId]: (prevLikes[messageId] || 0) + 1
    }));
  };

  const handleDislike = (messageId) => {
    setDislikes((prevDislikes) => ({
      ...prevDislikes,
      [messageId]: (prevDislikes[messageId] || 0) + 1
    }));
  };

  return (
    <div style={{ backgroundColor: '#ffcc80', padding: '20px' }}>
      <h2 style={{ color: '#ff6f00', fontFamily: 'Pacifico, cursive' }}>Chat Room</h2>
      {messages.map((message) => {
        const messageComments = comments[message.id] || [];
        const messageLikes = likes[message.id] || 0;
        const messageDislikes = dislikes[message.id] || 0;

        return (
          <div key={message.id}>
            <strong style={{ color: '#d50000' }}>{message.author}: </strong>
            <span style={{ color: '#000000' }}>{message.content}</span>
            <br />
            <button onClick={() => handleLike(message.id)}>Like</button>
            <button onClick={() => handleDislike(message.id)}>Dislike</button>
            <br />
            <input
              type="text"
              placeholder="Leave a comment..."
              onChange={(e) => handleComment(message.id, e.target.value)}
              style={{ color: '#000000' }}
            />
            <button onClick={() => handleComment(message.id, '')}>Comment</button>
            {messageComments.length > 0 && (
              <div>
                <strong style={{ color: '#4527a0' }}>Comments:</strong>
                {messageComments.map((comment, index) => (
                  <div key={index} style={{ color: '#311b92' }}>{comment}</div>
                ))}
              </div>
            )}
            <div>
              <strong style={{ color: '#d50000' }}>Likes: </strong>
              {messageLikes}
            </div>
            <div>
              <strong style={{ color: '#ff1744' }}>Dislikes: </strong>
              {messageDislikes}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatRoom;
