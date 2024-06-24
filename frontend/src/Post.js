import React from 'react';
import './Post.css';

const Post = ({ author, content }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={`${process.env.PUBLIC_URL}/avatar.png`} alt="Avatar" />
        <span>{author}</span>
      </div>
      <p>{content}</p>
      <div className="post-actions">
        <button>Curtir</button>
        <button>Comentar</button>
        <button>Compartilhar</button>
      </div>
    </div>
  );
};

export default Post;
