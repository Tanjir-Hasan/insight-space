import React from 'react';
import { BarChart, ResponsiveContainer, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, } from 'recharts';
import useQuizResult from '../../../../Hooks/useQuizResult';

const LeaderBoard = () => {
    const [quizResult, mockTest, modelTest] = useQuizResult();
    return (
        <div>
            {/* chart start 2 */}

            <div className='mt-6 p-5 border-2 rounded-md border-[#3c6e71]'>
                <h2 className='text-2xl font-bold border-b-2 mb-5'>Top 10 result history: </h2>
                <ResponsiveContainer width='90%' height={300} className="mx-auto " >
                    <BarChart
                        height={300}
                        data={quizResult}>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="userName" fill="DarkBlue" />
                        <Bar dataKey="subject" fill="Brown" />
                        <YAxis dataKey="score" fill="DarkBlue" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="DarkBlue" />
                        <Bar dataKey="date" fill="Brown" />

                    </BarChart>
                </ResponsiveContainer>
            </div>


            {/* start table */}
            <div className='mt-16 border-2 border-[#3c6e71]'>
            <h2 className='text-2xl font-bold border-b-2 mb-5'>Top 10 result history: </h2>
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

                            </tr>
                        </thead>
                        <tbody>


                            {quizResult?.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b "
                                // className={classNames({
                                //    'bg-gray-100'    : index % 2 === 0,
                                //   'bg-white': index % 2 !== 0,
                                // })}
                                >
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
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;