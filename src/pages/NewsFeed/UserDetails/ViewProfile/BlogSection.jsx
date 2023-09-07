// BlogSection.js
import React from "react";
import BlogSectionCard from "./BlogSectionCard";
import useMyPost from "../../../../Hooks/useMyPost";
import { useState } from "react";
import Button from "../../../../components/Button";

const BlogSection = () => {
  const [myPost] = useMyPost();
  const [showAll, setShowAll] = useState(false);

  const filterData = showAll ? myPost : myPost.slice(0, 3);
  const handleSeeMoreClick = () => {
    setShowAll(true);
  };

  return (
    <div className="mb-4 space-y-3">
      <div className="flex gap-5 mb-8 items-center">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="border w-36 px-3 bg-[#344e41] rounded-lg text-white text-center py-1 font-semibold ">
          Total Blog{" "}
          <span className="bg-white text-[#344e41] px-1 rounded">
            {myPost.length}
          </span>
        </p>
      </div>
      <div className="space-y-5">
        <h3 className="font-semibold text-xl capitalize">Top Blog's</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Single blog */}

          {filterData.map((myAllPost) => (
            <BlogSectionCard
              key={myAllPost._id}
              myAllPost={myAllPost}
            ></BlogSectionCard>
          ))}
        </div>
        <div className="text-center">
          {!showAll && (
            <button
              className="btn border border-[#344e41] hover:bg-[#344e41] hover:text-white duration-500 px-5 py-1 rounded-full"
              onClick={handleSeeMoreClick}
            >
              Show all Blogs
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
