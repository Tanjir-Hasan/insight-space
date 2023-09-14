import React, { useState } from 'react';
import Certificate from '../Certificate/Certificate';
import { SlClose } from 'react-icons/sl';


const ShowCertificate = ({selectedMockData}) => {
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
            <div>
                {selectedMockData.length > 0 && (
                    <div className='mt-16 border-2 border-[#3c6e71]'>
                        <h2 className='text-2xl font-bold border-b-2 mb-5 p-3'>Exam Information: {setCertificateInfo?.subject}</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className='bg-sky-800  md:text-xl py-5 text-white '>
                                    <tr className=''>
                                        <th className="px-6 py-3  text-left  font-medium tuppercase tracking-wider">
                                            No
                                        </th>
                                        <th className="px-6 text-left   font-medium uppercase tracking-wider">
                                            Name & Email
                                        </th>
                                        <th className="px-6 text-left  font-medium  uppercase tracking-wider">
                                            score & Subject
                                        </th>
                                        <th className="px-6 text-left   font-medium  uppercase tracking-wider">
                                            Exam & Date
                                        </th>
                                        <th className="px-6 text-left   font-medium  uppercase tracking-wider">
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>


                                    {selectedMockData?.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-b ">
                                            <td className="px-6 py-4  whitespace-no-wrap text-xl leading-5 font-bold ">
                                                {index + 1}
                                            </td>
                                            <td className="flex gap-3 items-center px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                <div>
                                                    <div className='font-bold '>
                                                        {item?.userName}

                                                    </div>
                                                    <div>
                                                        {item?.email}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                <div className='font-bold'>
                                                    <p>Score: {item?.score}</p>
                                                </div>
                                                <div>
                                                    <p>Subject: {item?.subject}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4  whitespace-no-wrap text-sm leading-5 text-gray-600">
                                                <div className='font-bold whitespace-nowrap'>
                                                    <p>Exam : {item?.examName}</p>
                                                </div>
                                                <div className='whitespace-nowrap'>
                                                    {item?.date}
                                                </div>
                                            </td>
                                            <td onClick={() => handleData(item?._id)} className="px-6 py-4  whitespace-no-wrap text-sm leading-5 text-gray-600">
                                                <button onClick={openModal} className='font-bold whitespace-nowrap bg-[#3c6e71] text-white px-5 py-2 rounded-lg '>Download Certificate</button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
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
                            <div className=" max-h-[95vh] overflow-y-auto">
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