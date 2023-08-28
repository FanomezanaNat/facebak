import React from "react";
import "./Post.css";

function Post({ post }) {
  const { title, content, user, createdAt, _count } = post;

  return (
    <div className="post">
      <div className="post_header">
        <div className="post_pic">
          <img src={user.photo} alt={`${user.username}`} />
        </div>
        <div className="post_info">
          <h3>{user.username}</h3>
          <p>{new Date(createdAt).toLocaleDateString()} • Global</p>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="post_footer">
        <p>{_count.reactions} J'aime</p>
        <p>{_count.comments} Commentaires</p>
      </div>
    </div>
  );
}

export default Post;
