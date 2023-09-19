import React, { useState } from 'react';
import Certificate from '../Certificate/Certificate';
import { SlClose } from 'react-icons/sl';
import moment from 'moment';


const ShowCertificate = ({ selectedMockData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [certificateInfo, setCertificateInfo] = useState([])



    const handleData = (_id) => {
        const findData = selectedMockData?.find(mock => mock?._id === _id)
        setCertificateInfo(findData)
    }




    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div className=''>
                {selectedMockData?.length > 0 ? (
                    <div className='mt-16 border-2  mb-10 border-[#3c6e71]'>
                        <h2 className='text-2xl font-bold border-b-2 mb-5 p-3'>Exam Information: {setCertificateInfo?.subject}</h2>
                        <div className="overflow-x-auto w-96 md:w-full ">
                            <table className="min-w-full ">
                                <thead className='bg-sky-800  lg:text-xl lg:py-5 py-2 text-white '>
                                    <tr className=''>
                                        <th className="lg:px-6 px-2 py-1 lg:py-3  text-left  font-medium tuppercase tracking-wider">
                                            No
                                        </th>
                                        <th className="lg:px-6 px-2 py-1 lg:py-3  text-left text-sm lg:font-medium uppercase tracking-wider">
                                            Name & Email
                                        </th>
                                        <th className="lg:px-6 px-2 py-1 lg:py-3  text-left text-sm  lg:font-medium  uppercase tracking-wider">
                                            score & Subject
                                        </th>
                                        <th className="lg:px-6 px-2 py-1 lg:py-3  text-left text-sm  lg:font-medium  uppercase tracking-wider">
                                            Exam & Date
                                        </th>
                                        <th className="lg:px-6 px-2 py-1 lg:py-3  text-left text-sm  lg:font-medium  uppercase tracking-wider">
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>


                                    {selectedMockData?.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-b ">
                                            <td className="lg:px-6 px-2 py-1 lg:py-4  whitespace-no-wrap text-xl leading-5 font-bold ">
                                                {index + 1}
                                            </td>
                                            <td className="lg:px-6 lg:py-4 px-2 py-2 whitespace-no-wrap text-xs leading-5 text-gray-500">
                                                <div>
                                                    <div className='text-xs lg:text-sm font-bold '>
                                                        {item?.userName}

                                                    </div>
                                                    <div>
                                                        {item?.email}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="lg:px-6 px-2 py-1 lg:py-4 whitespace-no-wrap text-xs leading-5 text-gray-500">
                                                <div className='font-bold'>
                                                    <p>Score: {item?.score}</p>
                                                </div>
                                                <div>
                                                    <p>Subject: {item?.subject}</p>
                                                </div>
                                            </td>
                                            <td className="lg:px-6 px-2 py-1 lg:py-4  whitespace-no-wrap text-xs leading-5 text-gray-600">
                                                <div className='font-bold whitespace-nowrap'>
                                                    <p>Exam : {item?.examName}</p>
                                                </div>
                                                <div className='whitespace-nowrap'>
                                                {moment(item?.date).format("lll")}
                                                </div>
                                            </td>
                                            <td onClick={() => handleData(item?._id)} className="lg:px-6 lg:py-4 px-2 py-1  whitespace-no-wrap text-sm leading-5 text-gray-600">


                                                <div className='relative'>
                                                    <button onClick={openModal} className='lg:text-xl text-xs border-2 text-black whitespace-nowrap border-[#3c6e71] hover:text-white font-[Poppins] hover:bg-[#3c6e71] lg:pl-14 pl-10 pr-1  lg:pr-3 duration-700 py-2 rounded-lg lg:my-5 my-2' >Download Certificate</button>
                                                    <img onClick={openModal} className='lg:w-12 w-9 h-9 lg:h-12 rounded-md absolute top-2 lg:top-5' src="https://cdn.dribbble.com/users/151595/screenshots/3517495/icon_downloading.gif" alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>

                ) : (

                    <div className='mt-20'>
                        <h2 className='text-sm md:text-3xl md:pr-20 '>You have selected wrong subject. Bescuse You haven't attended this exam yet, Please select Valid subject which you attend.
                        <img className='md:h-72' src="https://i.ibb.co/Jdg5n3c/LTd5ax-LXc-removebg-preview.png" alt="" />
                        
                        </h2>
                    </div>

                )}




                {/* modal start */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <div className="bg-white relative p-4 shadow-lg rounded-lg z-50">
                            <button>
                                <SlClose onClick={closeModal} className="absolute text-4xl text-[#3c6e71] top-3 right-7 rounded-full hover:text-white hover:bg-[#3c6e71]" />
                            </button>



                            {/* Add your modal content here */}
                            <div className=" max-h-[95vh] overflow-y-auto animate-zoom-in">
                                <Certificate certificateInfo={certificateInfo}></Certificate>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShowCertificate;