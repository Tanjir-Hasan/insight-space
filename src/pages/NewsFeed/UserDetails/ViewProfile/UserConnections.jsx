import React, { useContext } from "react";
import UserConnectionCard from "./UserConnectionCard";
import useMyFriends from "../../../../Hooks/useMyFriends";
import { Link } from "react-router-dom";

const UserConnections = () => {
  const [friends] = useMyFriends();

  return (
    <>
      <div className="h-full">
        <h2 className="text-xl font-semibold">Connected People</h2>
        <p className="text-sm text-gray-400">You can message them</p>
        {friends?.length > 0 ? (
          <>
            {friends.map((friend) => (
              <UserConnectionCard
                key={friend._id}
                friend={friend}
              ></UserConnectionCard>
            ))}
            <div className="text-center pt-5">
              <Link
                to={"/connections"}
                className="btn border border-[#344e41] hover:bg-[#344e41] hover:text-white duration-500 rounded px-3 py-1 font-semibold"
              >
                All Connection
              </Link>
            </div>
          </>
        ) : (
          <p className="font-[Cinzel] text-center">No friends found.</p>
        )}
      </div>
    </>
  );
};

export default UserConnections;
