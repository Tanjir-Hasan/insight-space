import React from "react";
import ActiveLink from "../../../../components/ActiveLink";
import {
  BsFillXCircleFill,
  BsGeoAltFill,
  BsInfoSquareFill,
  BsPenFill,
} from "react-icons/bs";
import {
  FaChair,
  FaLink,
  FaSchool,
  FaUser,
  FaUserGraduate,
} from "react-icons/fa";

const EditUserInfo = () => {
  return (
    <div className="">
      <ActiveLink to={""}>
        {" "}
        <button
          className="btn p-2 rounded duration-500 font-semibold bg-[#344e41] text-white"
          onClick={() => window.my_modal_6.showModal()}
        >
          <BsPenFill />
        </button>
      </ActiveLink>

      <dialog
        id="my_modal_6"
        className="modal modal-bottom w-full md:w-3/4 lg:w-4/6 xl:w-3/6 sm:modal-middle rounded-2xl p-3 shadow-[0px_0px_500px_600px_#000000a8] "
      >
        <div className="modal-box p-5 ">
          <div className="flex justify-between  mb-4">
            <h3 className="font-bold text-lg capitalize">
              Update Your Profile Info?
            </h3>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-[#344e41] hover:bg-red-500 rounded-full text-3xl border border-[#344e41] hover:border-red-500 text-white">
                  <BsFillXCircleFill />
                </button>
              </form>
            </div>
          </div>
          <hr />
          <form className="pt-5">
            <div className="flex flex-col md:flex-row py-2">
              <div className="flex gap-3 items-center w-full md:w-4/12">
                <span className=" text-[#344e41]">
                  <FaUser />
                </span>
                <p className="font-semibold text-lg text-[#344e41]">
                  User Name
                </p>
              </div>
              <div className=" w-1/12 flex items-center">
                <p className="font-bold px-2 hidden md:block">:</p>
              </div>
              <div className="w-full md:w-7/12">
                <input
                  className="border border-[#344e41] rounded w-full py-1"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row py-2">
              <div className="flex gap-3 items-center w-full md:w-4/12">
                <span className=" text-[#344e41]">
                  <FaChair />
                </span>
                <p className="font-semibold text-lg text-[#344e41]">
                  Designation
                </p>
              </div>
              <div className="w-1/12 flex items-center">
                <p className="font-bold px-2 hidden md:block">:</p>
              </div>
              <div className="w-full md:w-7/12">
                <input
                  className="border border-[#344e41] rounded w-full py-1"
                  type="text"
                  name="designation"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row py-2">
              <div className="flex gap-3 items-center w-full md:w-4/12">
                <span className=" text-[#344e41]">
                  <FaUserGraduate />
                </span>
                <p className="font-semibold text-lg text-[#344e41]">
                  Education
                </p>
              </div>
              <div className="w-1/12 flex items-center">
                <p className="font-bold px-2 hidden md:block">:</p>
              </div>
              <div className="w-full md:w-7/12">
                <input
                  className="border border-[#344e41] rounded w-full py-1"
                  type="text"
                  name="education"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row py-2">
              <div className="flex gap-3 items-center w-full md:w-4/12">
                <span className=" text-[#344e41]">
                  <FaSchool />
                </span>
                <p className="font-semibold text-lg text-[#344e41]">
                  Last Schools
                </p>
              </div>
              <div className="w-1/12 flex items-center">
                <p className="font-bold px-2 hidden md:block">:</p>
              </div>
              <div className="w-full md:w-7/12">
                <input
                  className="border border-[#344e41] rounded w-full py-1"
                  type="text"
                  name="school"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row py-2">
              <div className="flex gap-3 items-center w-full md:w-4/12">
                <span className=" text-[#344e41]">
                  <BsInfoSquareFill />
                </span>
                <p className="font-semibold text-lg text-[#344e41]">About Me</p>
              </div>
              <div className="w-1/12 flex items-center">
                <p className="font-bold px-2 hidden md:block">:</p>
              </div>
              <div className="w-full md:w-7/12">
                <textarea
                  className="border border-[#344e41] rounded h-9 w-full py-1"
                  type="text"
                  name="info"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row py-2">
              <div className="flex gap-3 items-center w-full md:w-4/12">
                <span className=" text-[#344e41]">
                  <FaLink />
                </span>
                <p className="font-semibold text-lg text-[#344e41]">
                  Portfolio
                </p>
              </div>
              <div className="w-1/12 flex items-center">
                <p className="font-bold px-2 hidden md:block">:</p>
              </div>
              <div className="w-full md:w-7/12">
                <input
                  className="border border-[#344e41] rounded w-full py-1"
                  type="link"
                  name="link"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row py-2">
              <div className="flex gap-3 items-center w-full md:w-4/12">
                <span className=" text-[#344e41]">
                  <BsGeoAltFill />
                </span>
                <p className="font-semibold text-lg text-[#344e41]">Address</p>
              </div>
              <div className="w-1/12 flex items-center">
                <p className="font-bold px-2 hidden md:block">:</p>
              </div>
              <div className="w-full md:w-7/12">
                <input
                  className="border border-[#344e41] rounded w-full py-1"
                  type="text"
                  name="location"
                />
              </div>
            </div>
            <div className="text-center mt-4 mb-2">
              <button
                type="submit"
                className="border bg-[#344e41] text-white px-5 py-2 rounded-md"
              >
                Update Info
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EditUserInfo;
