import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.suite}, {address.city}
      </p>
      <small className="text-gray-400">User ID: {id}</small>
    </div>
  );
};

export default UserCard;
