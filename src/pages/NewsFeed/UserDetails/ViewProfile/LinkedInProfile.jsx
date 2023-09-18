import { useContext, useState } from "react";
import { SlClose } from "react-icons/sl";
import { Link } from "react-router-dom";
import SingleChat from "../../../../ChatApplication/SingleChat/SingleChat";
import usePosts from "../../../../Hooks/usePosts";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import NewsForm from "../../NewsForm/NewsForm";

import UserConnections from "./ConnectPepole/UserConnections";



import FriendLayout from "./MyFriends/FriendLayout";
import MyAllFriends from "./MyFriends/MyFriendAllFriends";
import MyPhotos from "./MyPhotos/MyPhotos";
import TopPhotos from "./MyPhotos/TopPhotos";
import MyPosts from "./MyPosts/MyPosts";
import MyTopBlog from "./MyTopBlog/MyTopBlog";
import CoverPhoto from "./Profilesection/CoverPhoto";
import EditUserInfo from "./Profilesection/EditUserInfo";
import ProfileInfo from "./Profilesection/ProfileInfo";
import ProfilePicture from "./Profilesection/ProfilePicture";




const LinkedInProfile = () => {
  const { theme } = useContext(ThemeContext);
  const [displayPost, setDisplayPost] = useState(false)
  const [post, setPost] = useState(false)
  const [photo, setPhoto] = useState(false)
  const [options, setOptions] = useState('')
  const [friends, setFriends] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOptionChangeMock = (event) => {
    const select = event.target.value;
    setOptions(select); // Update the selected subject when it changes
  };



  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePost = () => {
    setPost(true)
    setPhoto(false)
    setFriends(false)
    setDisplayPost(true)
  }
  const handlePhoto = () => {
    setPost(false)
    setPhoto(true)
    setFriends(false)
    setDisplayPost(true)
  }
  const handleFriends = () => {
    setFriends(true)
    setPost(false)
    setPhoto(false)
    setDisplayPost(true)
  }

  return (
    <>
      <div className="flex justify-between  gap-5">
        <div className=" w-[95%] md:w-8/12 border rounded-lg md:h-[1350px] mx-auto lg:h-[1250px] md:overflow-y-auto ">
          <div className=" rounded-lg mb-16 ">
            <div className="">
              <CoverPhoto />
            </div>
            <div className="p-2 ">
              <div className="relative">
                <div className="flex justify-between items-center gap-5 pb-4 py-1  px-2 rounded-b-2xl">
                  <div className="flex gap-5 ">
                    <ProfilePicture />
                   
                  </div>

                </div>
                <div className="absolute top-5 right-5"><EditUserInfo></EditUserInfo></div>
              </div>

              <div className="text-justify mb-6  rounded-2xl">
                <h2 className="text-2xl font-bold mb-2 border-b inline-block">About Me</h2>
                <ProfileInfo></ProfileInfo>
           
              </div>

              <div className="  ">
                <div className=" flex gap-4  lg:gap-8 px-2 py-2 pb-2 border-b-2 shadow-2xl ">
                  <button onClick={() => handlePost()} className="text-sm lg:text-base ">Posts</button>
                  <button onClick={() => handlePhoto()} className="text-sm lg:text-base">Photos</button>
                  <button onClick={() => handleFriends()} className="text-sm lg:text-base ">Friends</button>
                  <button onClick={openModal} className="text-sm lg:text-base">Message</button>


                  <select className='text-black text-sm lg:text-base outline-none' value={options} onChange={handleOptionChangeMock}>
                    <option className="" value="">More..</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="bookmark">Bookmarks</option>
                    <option value="payments">My Payments</option>
                    <option value=""></option>

                  </select>
                </div>
              </div>
            </div>
          </div>



          <div className={`${theme === "dark" ? "dark" : ""} w-12/12`}>
            {
              !displayPost && (
                <div>
                  <NewsForm></NewsForm>
                  <MyPosts></MyPosts>
                </div>
              )
            }
            {
              post && (
                <div>
                  <NewsForm></NewsForm>
                  <MyPosts></MyPosts>
                </div>
              )
            }

            {
              photo && (
                <MyPhotos></MyPhotos>
              )
            }
           <div className="w-12/12">
           {
              friends && (
                <FriendLayout></FriendLayout>
              )
            }
           </div>
          </div>
        </div>


        <div className={`${theme === "dark" ? "dark" : "bg-slate-100 border-2"} md:w-4/12  hidden md:block  border-[#8f9090] border   rounded-2xl p-4 mb-6 `}>
          <div className="">

            <div className="border-[#8f9090] border-b rounded-lg shadow-lg  ">
              <UserConnections />
            </div>
            <div className="border-[#8f9090] border-b  mt-5 p-3 rounded-lg shadow-lg ">
              <TopPhotos></TopPhotos>
              <button onClick={() => handlePhoto()} className="border border-[#344e41] hover:bg-[#344e41] hover:text-white duration-500 rounded px-3 py-1 font-semibold text-xs mt-2" >See More...</button>
            </div>
            <div className=" border-[#8f9090] border-b  mt-5 p-3 rounded-lg shadow-lg ">
              <MyAllFriends></MyAllFriends>
              <button onClick={() => handleFriends()} className="border border-[#344e41] hover:bg-[#344e41] hover:text-white duration-500 rounded px-3 py-1 font-semibold text-xs mt-2" >See More...</button>
            </div>
            <div className="  mt-5 p-3 rounded-lg shadow-lg ">
              <MyTopBlog></MyTopBlog>
              <button onClick={() => handleFriends()} className="border border-[#344e41] hover:bg-[#344e41] hover:text-white duration-500 rounded px-3 py-1 font-semibold text-xs mt-2" >See More...</button>
            </div>


          </div>

        </div>


        {/* modal start */}
        {isModalOpen && (
          <div className="fixed animate-zoom-in inset-0  flex  mx-auto items-center justify-center z-50">
            <div className="fixed inset-0  bg-black opacity-50"></div>
            <div className="bg-white relative   w-11/12 mx-auto p-4 shadow-lg rounded-lg z-50 zoom-in-out-modal">
              <button onClick={closeModal}>

                <SlClose className="text-4xl text-[#3c6e71] absolute top-0 right-0 rounded-full hover:text-white hover:bg-[#3c6e71]" />
              </button>

              {/* Modal content with zoom-in/out animation */}
              <div className=" max-h-[93vh] overflow-y-auto text-black animate-zoom-in">

                <SingleChat></SingleChat>

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LinkedInProfile;
