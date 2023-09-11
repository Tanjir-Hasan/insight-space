import React from "react";
import { Link } from "react-router-dom";

const BlogSectionCard = ({ myAllPost }) => {
  const {_id, imgURL, category, text } = myAllPost;
  return (
    <div className="relative shadow-xl rounded-xl">
      {
        imgURL ? <img className="object-cover rounded-xl h-full" src={imgURL} alt="Blog" /> : <img className="object-cover rounded-xl h-full" src="https://i.ibb.co/g45YBLY/download.jpg" alt="Blog"  />
      }
      <div className="absolute bottom-0 rounded-xl p-3  bg-[#84a98c] duration-500 w-full h-full opacity-0 hover:opacity-100  overflow-hidden">
        <h3 className="font-semibold uppercase py-1">{category}</h3>
        <p className="text-sm">{text?.slice(0, 77)} <Link to={`/news-feed`} className="border border-[#344e41] px-2 rounded ml-1 mt-1">See More</Link></p>
      </div>
    </div>
  );
};

export default BlogSectionCard;
