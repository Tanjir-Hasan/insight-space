import React, { useRef} from 'react';
import { useReactToPrint } from 'react-to-print';


const Certificate = ({certificateInfo, user, subject}) => {
   console.log(certificateInfo)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    const certificatBg = {
        backgroundImage: 'url(https://i.ibb.co/Ldw09g8/depositphotos-14295555-stock-illustration-certificate-background.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };


    return (
        <div>
               <div className='relative'>
               <button onClick={handlePrint} className='text-xl text-black border-2 border-[#3c6e71] hover:text-white font-[Poppins] hover:bg-[#3c6e71]  px-12 duration-700 py-2 rounded-lg my-5' >Download Certificate</button>
                <img className='w-12 h-12 rounded-md absolute  top-5' src="https://cdn.dribbble.com/users/151595/screenshots/3517495/icon_downloading.gif" alt="" />
               </div>

                <div ref={componentRef} className=' border-4 p-5 text-black' style={certificatBg} >                
                   <div className='text-center'>
                        <img className='h-16 inline border-r-4 mr-2 border-[#3c6e71]' src="https://i.ibb.co/WFCHpYD/the-int-schl-advisory-board-removebg-preview.png" alt="" />
                        <img className='h-16 inline' src="https://i.ibb.co/bm10NLR/4-1.png" alt="" />
                    </div>
                   
                    <div className='mt-10'>
                        <h2 className='md:text-4xl text-2xl font-bold uppercase text-center   font-[Monospace]'>Certificate of Online Examinition</h2>
                    </div>
                    <div className='text-center font-[Poppins] text-lg mt-3'>
                        <h2 className='py-2 px-8 inline bg-[#3c6e71] box-content rounded-3xl text-white'>The Certificate is granted to</h2>
                        <h2 className='font-[Cursive] text-2xl mt-3  '>{certificateInfo?.userName}</h2>
                        <p>For completeing the online live examinition of 2023. </p>
                        <img className='mx-auto h-28 right-0' src="https://i.ibb.co/2tNBxhQ/images-1-removebg-preview.png" alt="" />
                    </div>

                    <div className=' font-[Poppins] px-5 md:px-20 mt-8 italic'>
                        <p className='border-[#3c6e71] border-t border-dashed'>This Certificate of Achievement is awarded to <span className='uppercase font-semibold italic'>{certificateInfo?.userName}</span> for their successful completion of the <span className=' font-semibold italic'>{certificateInfo?.examName}</span> of <span className=' font-semibold italic'>{certificateInfo?.subject}</span> held on <span>{certificateInfo?.date}</span>. They have earned <span className=' font-semibold'>{certificateInfo?.score}</span> points out of 25 Points , reflecting their dedication to learning and excellence.</p>
                        <p className='mt-4'> <span className='uppercase font-semibold italic'>Insight spece</span> commends <span>{certificateInfo?.userName}</span> for their achievement and looks forward to their continued success.</p>
                    </div>


                    <div className='flex justify-between items-end mt-8 '>
                        <div>
                            <p>{certificateInfo?.date}</p>
                            <h2 className='border-t-2 border-[#3c6e71] text-xl font-semibold italic mt-1'>Date Awarded</h2>
                        </div>
                        <div className='text-center'>
                            <img className='h-20 mx-auto' src="https://i.ibb.co/zVw0YcR/tansen-removebg-preview.png " alt="" />
                            <h2 className='border-t-2 border-[#3c6e71] text-xl font-semibold italic '>Pro. Tanjir</h2>
                            <p className='font-[Poppins] text-xs'>Regional Coordinator & <br /> Genarel Convener Online Quiz</p>
                        </div>
                      
                        <div className='text-center'>
                            <img className='mx-auto h-10' src="https://i.ibb.co/0ZpjCfX/Screenshot-13.png" alt="" />
                            <h4 className='text-right  border-t-2 border-[#3c6e71] text-xl font-semibold italic mt-5'>Authority</h4>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Certificate;