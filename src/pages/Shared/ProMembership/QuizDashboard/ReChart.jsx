import React from 'react';
import { BarChart, ResponsiveContainer, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, } from 'recharts';
import useQuizResult from '../../../../Hooks/useQuizResult';





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

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const ReChart = () => {
    const [quizResult, mockTest, modelTest] = useQuizResult();
  
    return (
        <div>
            {/* chart start 2 */}

         
                <div className='mt-6 p-5 border-2 rounded-md border-[#3c6e71]'>
                    <h2 className='text-2xl font-[Poppins] font-bold border-b-2 mb-5'>Your Mock test result history: </h2>
                    <ResponsiveContainer width='98%' height={300} className="mx-auto " >
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
                    <h2 className='text-2xl font-[Poppins] font-bold border-b-2 mb-5'>Your live exam result history: </h2>
                    <ResponsiveContainer width="98%" height={300} className="mx-auto" >
                        <BarChart
                            width={500}
                            height={300}
                            data={quizResult}
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
                                {quizResult?.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
           




            {/* chart start 3 */}
           
                <div className='mt-12 p-5 border-2 rounded-md border-[#3c6e71]'>
                    <h2 className='text-2xl font-[Poppins] font-bold border-b-2 mb-5'>Your Model test result history: </h2>
                    <ResponsiveContainer width="98%" height={300} className="mx-auto" >
                        <BarChart
                            height={300}
                            data={modelTest}
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

export default ReChart;