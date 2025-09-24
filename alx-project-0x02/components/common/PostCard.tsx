import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <small className="text-gray-500">Post #{id} by User {userId}</small>
    </div>
  );
};

export default PostCard;
