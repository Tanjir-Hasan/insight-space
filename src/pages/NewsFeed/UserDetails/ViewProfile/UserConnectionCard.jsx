import React from "react";

const UserConnectionCard = ({ friend }) => {
  const {photoURL, displayName} = friend;

  return (
    <>
      <div className="">
        <div className="flex gap-3 items-center py-8">
          <img
            className="rounded-full w-14 h-14 border-[#ddd] border"
            src={photoURL}
            alt={displayName}
          />
          <div className="space-y-1">
            <h4 className="font-semibold capitalize">{displayName}</h4>
            <button className="btn border rounded-md px-2 bg-[#84a98c] text-white">
              Message
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default UserConnectionCard;
