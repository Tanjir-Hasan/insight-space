import React, { useContext, useEffect, useState } from 'react';
import useQuizResult from '../../../../Hooks/useQuizResult';
import ShowCertificate from './ShowCertificate';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import useTitle from '../../../../Hooks/useTitle';



const DownLoadCertificate = () => {

    const [quizResult, mockTest, modelTest] = useQuizResult();

    const [selectedSubjectMock, setSelectedSubjectMock] = useState('');

    const [selectedSubjectModel, setSelectedSubjectModel] = useState('');

    const [selectedMockData, setSelectedMockData] = useState([]); // State to store the filtered mock test data

    const { theme } = useContext(ThemeContext);

    const [ref, inView] = useInView();

    const controls = useAnimation();

    useTitle('Download Certificate');

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);




    const handleOptionChangeMock = (event) => {
        const selectedSubjects = event.target.value;
        setSelectedSubjectMock(selectedSubjects); // Update the selected subject when it changes
    };
    const handleOptionChangeModel = (event) => {
        const selectedSubjects = event.target.value;
        setSelectedSubjectModel(selectedSubjects); // Update the selected subject when it changes
    };

    const selectMock = () => {
        const mockData = mockTest?.filter(mock => mock?.subject === selectedSubjectMock);
        setSelectedMockData(mockData);
    }
    const selectModel = () => {
        const modelData = modelTest?.filter(mock => mock?.subject === selectedSubjectModel);
        setSelectedMockData(modelData);
    }





    return (
        <div>
            <div>
                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#48cae4]'} border-b-2 md:text-5xl text-4xl font-[Cinzel] lg:w-1/2 w-11/12`}>
                    Download Certificate
                </motion.h1>
                <div className=''>


                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                        transition={{ duration: 2.0 }}>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-10'>
                            <div className='font-[Cinzel] border p-5 rounded-md bg-slate-600'>
                                <h2 className='text-xl font-bold text-white mb-5'>Exam Name: Mock Test</h2>
                                <select className='text-xl text-black font-semibold p-2 border-2' onClick={() => selectMock()} value={selectedSubjectMock} onChange={handleOptionChangeMock}>
                                    <option value="">Select...</option>
                                    <option className='' value="বাংলা">বাংলা</option>
                                    <option value="English">English</option>
                                    <option value="Higher Mathematics">Higher Mathematics</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Biology">Biology</option>
                                    <option value="Physics">Physics</option>
                                    <option value="ICT">ICT</option>
                                    <option value="General Knowledge">General Knowledge</option>
                                </select>
                            </div>

                            {/* <div className='border-2 p-5 rounded-md bg-slate-600'>
                    <h2 className='text-xl font-bold text-white mb-5'>Exam Name: Live Exam</h2>
                        <select className='text-xl text-black font-semibold p-2 border-2' onClick={() => selectSub()} value={selectedSubject} onChange={handleOptionChange}>
                            <option value="">Select...</option>
                            <option className='' value="বাংলা">বাংলা</option>
                            <option value="English">English</option>
                            <option value="Higher Mathematics">Higher Mathematics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Biology">Biology</option>
                            <option value="Physics">Physics</option>
                            <option value="ICT">ICT</option>
                            <option value="General Knowledge">General Knowledge</option>
                        </select>
                    </div> */}

                            <div className='font-[Cinzel] border p-5 rounded-md bg-slate-600'>
                                <h2 className='text-xl font-bold text-white mb-5'>Exam Name: Model Test</h2>
                                <select className='text-xl text-black font-semibold p-2 border-2' onClick={() => selectModel()} value={selectedSubjectModel} onChange={handleOptionChangeModel}>
                                    <option value="">Select...</option>
                                    <option value="বাংলা">বাংলা</option>
                                    <option value="English">English</option>
                                    <option value="Higher Mathematics">Higher Mathematics</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Biology">Biology</option>
                                    <option value="Physics">Physics</option>
                                    <option value="ICT">ICT</option>
                                    <option value="General Knowledge">General Knowledge</option>
                                </select>
                            </div>

                        </div>
                    </motion.div>

                    <ShowCertificate selectedMockData={selectedMockData}></ShowCertificate>

                </div>
            </div>
        </div>
    );
};

export default DownLoadCertificate;