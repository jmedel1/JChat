import React, { useState } from 'react';

const ChatRoom = ({ messages }) => {
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const handleComment = (messageId, comment) => {
    const newComment = comment.trim();
    if (newComment) {
      setComments((prevComments) => ({
        ...prevComments,
        [messageId]: [...(prevComments[messageId] || []), newComment]
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
    <div>
      <h2>Chat Room</h2>
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{message.author}: </strong>
          {message.content}
          <br />
          <button onClick={() => handleLike(message.id)}>Like</button>
          <button onClick={() => handleDislike(message.id)}>Dislike</button>
          <br />
          <input
            type="text"
            placeholder="Leave a comment..."
            value={comments[message.id] || ''}
            onChange={(e) => {
              const comment = e.target.value;
              setComments((prevComments) => ({
                ...prevComments,
                [message.id]: comment
              }));
            }}
          />
          <button
            onClick={() => handleComment(message.id, comments[message.id])}
          >
            Comment
          </button>
          {comments[message.id] && (
            <div>
              <strong>Comments:</strong>
              {comments[message.id].map((comment, index) => (
                <div key={index}>{comment}</div>
              ))}
            </div>
          )}
          <div>
            <strong>Likes: </strong>
            {likes[message.id] || 0}
          </div>
          <div>
            <strong>Dislikes: </strong>
            {dislikes[message.id] || 0}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatRoom;
