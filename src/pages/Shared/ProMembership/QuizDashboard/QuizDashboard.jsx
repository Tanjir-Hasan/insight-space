import React, { useEffect, useState } from 'react';
import useUser from '../../../../Hooks/useUser';
import { BarChart, ResponsiveContainer, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, } from 'recharts';
import useAuth from '../../../../Hooks/UseAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';



const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
        <g>
            <circle cx={x + width / 2} cy={y - radius} r={radius} fill="OrangeRed" />
            <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
                {value}
            </text>
        </g>
    );
};


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const QuizDashboard = () => {
    const { user } = useAuth();
    const [userDetails] = useUser();
    const [axiosSecure] = useAxiosSecure();
    const [mockTest, setMockTest] = useState([])
  

    const url = `/exam-test?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(data => setMockTest(data.data))
            .catch(err => console.log(err.message))
    }, [url])

    return (
        <div className='min-h-[65vh]'>
            <div className='grid grid-cols-3 gap-5 text-white'>
                <div className='h-40 bg-slate-600 rounded-md'>
                    <div className=' text-center p-2'>
                        <img className='mx-auto rounded-full h-20 w-20' src={userDetails?.photoURL} alt="" />
                        <h2>{userDetails?.displayName}</h2>
                    </div>
                </div>
                <div className='h-40 bg-slate-600 rounded-md'>
                    <h2 className='text-2xl p-2'>Rank</h2>
                </div>
                <div className='h-40 bg-slate-600 rounded-md'>
                    <h2 className='text-2xl p-2'>Exam</h2>
                </div>
            </div>



            {/* chart start 2 */}

            <div className='mt-6 p-5 border-2 rounded-md border-[#3c6e71]'>
                <h2 className='text-2xl font-bold border-b-2 mb-5'>Your live exam test history: </h2>
                <ResponsiveContainer width='90%' height={300} className="mx-auto " >
                    <BarChart
                        height={300}
                        data={mockTest}>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subject" fill="DarkBlue" />
                        <YAxis dataKey="score" fill="DarkBlue" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="DarkBlue" />
                        <Bar dataKey="date" fill="Brown" />
                    </BarChart>
                </ResponsiveContainer>
            </div>




            {/* chaet start 2 */}
            <div className='mt-12 p-5 border-2 rounded-md border-[#3c6e71]'>
                <h2 className='text-2xl font-bold border-b-2 mb-5'>Your Model test exam history: </h2>
                <ResponsiveContainer width="90%" height={300} className="mx-auto" >
                    <BarChart
                        width={500}
                        height={300}
                        data={mockTest}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subject" />
                        <YAxis />
                        <Bar dataKey="score" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {mockTest && mockTest?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>




            {/* chart start 3 */}
            <div className='mt-12 p-5 border-2 rounded-md border-[#3c6e71]'>
                <h2 className='text-2xl font-bold border-b-2 mb-5'>Your Mock test Quiz history: </h2>
                <ResponsiveContainer width="90%" height={300} className="mx-auto" >
                    <BarChart
                        height={300}
                        data={mockTest}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subject" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="DarkMagenta" minPointSize={5}>
                            <LabelList dataKey="score" content={renderCustomizedLabel} />
                        </Bar>
                        {/* <Bar dataKey="score" fill="#82ca9d" minPointSize={10} /> */}
                    </BarChart>
                </ResponsiveContainer>
            </div>



        </div>
    );
};

export default QuizDashboard;