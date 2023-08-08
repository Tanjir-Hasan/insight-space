import React from 'react';

const Menu = () => {
   
    return (
        <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-white">
      <a
        href="#"
        className=" md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Home
      </a>
      <a
        href="#"
        className=" text-white md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        News feed
      </a>
      <a
        href="#"
        className=" md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Blogs
      </a>
      <a
        href="#"
        className=" md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Contact
      </a>
    </div>
    );
};

export default Menu;