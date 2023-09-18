import React from "react";
import { Link } from "react-router-dom";

const UserConnectionCard = ({ friend }) => {
  const { photoURL, displayName } = friend;

  return (
    <>
      <div className="">
        <div className="flex gap-3  items-center py-4">
          <img
            className="rounded-full w-10 h-10  border"
            src={photoURL}
            alt={displayName}
          />
          <div className="space-y-1">
            <h4 className="font-semibold  text-xs capitalize">{displayName}</h4>
            <Link to={"/single-chat"}>
              <button className="btn text-xs  border rounded-md px-2 bg-[#185325] text-white">
                Message
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default UserConnectionCard;
