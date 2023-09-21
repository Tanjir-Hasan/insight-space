import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useMyFriends from "../../../../../Hooks/useMyFriends";
import UserConnectionCard from "./UserConnectionCard";
import { ThemeContext } from "../../../../../providers/ThemeProvider";

const UserConnections = () => {

  const [friends] = useMyFriends();

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="p-3 rounded-lg shadow-lg">

        <h2 className="lg:text-xl text-base font-bold">Connected People</h2>

        <p className="lg:text-sm text-xs pb-2 border-[#3c6e71] border-b text-gray-400">You can message them</p>

        {
          friends?.length > 0 ? (
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
                  className={`${theme === 'light' ? 'text-white bg-gradient-to-bl from-[#006466] to-[#212f45] hover:bg-gradient-to-tr hover:from-[#006466] hover:to-[#212f45]' :
                  theme === 'dark' ? 'text-white bg-gradient-to-bl from-[#48cae4] to-[#051923] hover:bg-gradient-to-tl hover:from-[#051923] hover:to-[#48cae4]' :
                      theme === 'night' ? 'text-white bg-gradient-to-bl from-[#0d1b2a] to-[#b79ced] hover:bg-gradient-to-tr hover:from-[#0d1b2a] hover:to-[#b79ced]' : ''} duration-500 rounded px-3 py-1 font-semibold`}
                >
                  All Connection
                </Link>
              </div>
            </>
          ) : (
            <p className="font-[Cinzel] text-center">No friends found.</p>
          )
        }

      </div>
    </>
  );
};

export default UserConnections;
