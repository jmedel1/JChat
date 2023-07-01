import React, { useState } from 'react';

const ChatRoom = ({ messages }) => {
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [comment, setComment] = useState('');

  const handleComment = (messageId) => {
    if (comment.trim()) {
      setComments((prevComments) => ({
        ...prevComments,
        [messageId]: [...(prevComments[messageId] || []), comment]
      }));
      setComment(''); // Clear the comment state
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
      {messages.map((message) => {
        const messageComments = comments[message.id] || [];
        return (
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={() => handleComment(message.id)}>Comment</button>
            {messageComments.length > 0 && (
              <div>
                <strong>Comments:</strong>
                {messageComments.map((comment, index) => (
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
        );
      })}
    </div>
  );
};

export default ChatRoom;
