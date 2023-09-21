import React, { useContext } from "react";


import { Link } from "react-router-dom";
import useMyFriends from "../../../../../Hooks/useMyFriends";
import UserConnectionCard from "./UserConnectionCard";

const UserConnections = () => {
  const [friends] = useMyFriends();

  return (
    <>
      <div className="  p-3 rounded-lg shadow-lg ">
        <h2 className="lg:text-xl text-base font-bold">Connected People</h2>
        <p className="lg:text-sm text-xs pb-2 border-[#3c6e71] border-b text-gray-400">You can message them</p>
        {friends?.length > 0 ? (
          <>
            {friends?.slice(0, 3)?.map((friend) => (
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
