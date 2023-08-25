import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const teamData =
{
    "id": 1,

    "SocialImg": ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png", "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg"],

    "tanjir":
    {
        "teamName": "Mr. Tanjir",
        "position": "Team Member",
        "memberImg": "https://i.ibb.co/N9YYhqF/50241594-2201770363415777-5877821572466606080-n.jpg",
    },

    "id": 2,
    "shamim":
    {
        "teamName": "Mr. Shamim",
        "position": "Team Member",
        "memberImg": "https://i.ibb.co/tbpwNBs/shamim-removebg-preview.png",
    },

    "id": 3,
    "sumaiya":
    {
        "teamName": "Mis. Sumaiya",
        "position": "Team Leader",
        "memberImg": "https://i.ibb.co/ZzYRd8h/357120978-325846719996339-506195303330660579-n.jpg",
    },

    "id": 4,
    "jahirul":
    {
        "teamName": "Mr. Jahirul",
        "position": "Team Member",
        "memberImg": "https://i.ibb.co/Ltjr0sx/330782946-1368411313945971-4023861816698754852-n.jpg",


    },
    "id": 5,
    "kakan":
    {
        "teamName": "Mr. Kakan",
        "position": "Team Member",
        "memberImg": "https://i.ibb.co/MC0jb8r/18157061-1038521846248124-888677393205779315-n.jpg",
    },


}




const OurTeam = () => {
    const { theme } = useContext(ThemeContext);
    const customClipPathStyle = {


        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        webkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        // backgroundImage : 'url(https://wallpaperaccess.com/full/4214210.gif)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    };

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);







    return (

        <div className={`${theme === 'dark' ? 'dark' : 'w-11/12 my-14 mx-auto'}`}>
            <div>
                <div className='md:w-10/12 w-11/12 pt-5 mx-auto'>
                    <h2 className='md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#84a98c] lg:w-1/2 w-11/12 mb-8'>Our Team</h2>
                </div>
            </div>


            <div className="md:flex gap-20 items-center mt-20">
                {/* 1st team member information */}

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}
                    className="relative flex justify-end gap-10 items-center  md:w-[50%]" >

                    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className=" text-[#0def3e] w-6 h-6 absolute -top-2 right-52">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                        </svg>
                        <hr className='border-[#0def3e] border w-[157px] absolute -top-2 right-16' />
                        <hr className='border-[#0def3e] border h-[20px] absolute -top-2 right-16' />
                        <div className=' text-right  '>
                            <h3>{teamData.tanjir.teamName}</h3>
                            <h2 className='text-xl text-slate-400 font font-semibold border-b border-[#84a98c]'>{teamData.tanjir.position}</h2>
                            <div className='flex justify-end gap-3 mt-2  '>
                                <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[0]} alt="" />
                                <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[1]} alt="" />
                                <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[2]} alt="" />
                            </div>
                        </div>
                        <div
                            className="bg-gray-400 h-32 w-32 border-2 "
                            style={customClipPathStyle}>
                            <img className=' h-36 w-36' src={teamData.tanjir.memberImg} alt="" />
                        </div>                
                </motion.div>



                {/* 2st team member information */}               
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 },
                    }}
                    transition={{ duration: 0.9 }}
                    className="relative flex  gap-10 items-center mt-7 md:mt-0 md:w-[50%]">
               
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="text-[#0def3e] w-6 h-6 absolute -top-2 left-52">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                    </svg>
                    <hr className='border-[#0def3e] border w-[157px] absolute -top-2 left-16' />
                    <hr className='border-[#0def3e] border h-[20px] absolute -top-2 left-16' />
                    <div
                        className="bg-slate-300 h-32 w-32 border-2 border-zinc-900 p-2"
                        style={customClipPathStyle} >
                        <img className=' h-32 w-32' src={teamData.shamim.memberImg} alt="" />
                    </div>
                    <div className=' '>
                        <h3>{teamData.shamim.teamName}</h3>
                        <h2 className='text-xl text-slate-400 font font-semibold border-b border-[#84a98c]'>{teamData.shamim.position}</h2>
                        <div className='flex  gap-3 mt-1 '>
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[0]} alt="" />
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[1]} alt="" />
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[2]} alt="" />
                        </div>
                    </div>
                    </motion.div>
                </div>
          
            {/* end  */}










            {/* 3 number member information */}
            <div className='mx-auto my-5 md:mx-0 '>
                <div className='flex gap-5 items-center justify-center'>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}
                    className="relative text-right" >
                   
                        <h2>{teamData.sumaiya.teamName}</h2>
                        <h2 className='text-xl text-slate-400 font font-semibold border-b border-[#84a98c]'>{teamData.sumaiya.position}</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#0def3e] w-6 h-6 -right-6 absolute top-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        </motion.div>
                    <div
                        className=" bg-slate-500 h-32 w-32 border-2 "
                        style={customClipPathStyle}>
                        <img className='h-30 w-36' src={teamData.sumaiya.memberImg} alt="" />
                    </div>

                    <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 },
                    }}
                    transition={{ duration: 0.9 }}
                    className="relative" >
                    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-[#0def3e] w-6 h-6 absolute -left-6 bottom-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <h2>Contact me:</h2>
                        <div className='flex justify-end gap-3 mt-1 '>
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[0]} alt="" />
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[1]} alt="" />
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[2]} alt="" />
                        </div>
                        </motion.div>
                </div>
            </div>







            {/* 4st team member information */}
            <div className="md:flex gap-20 mx-auto  ">

            <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}
                    className="relative flex justify-end gap-10 items-center md:w-[50%]" >
              
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="text-[#0def3e] w-6 h-6 absolute -bottom-2 right-52">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>
                    <hr className='border-[#0def3e] border w-[157px] absolute -bottom-2 right-16' />
                    <hr className='border-[#0def3e] border h-[20px] absolute -bottom-2 right-16' />
                    <div className='text-right '>
                        <h3>{teamData.jahirul.teamName}</h3>
                        <h2 className='text-xl text-slate-400 font font-semibold border-b border-[#84a98c]'>{teamData.jahirul.position}</h2>
                        <div className='flex justify-end gap-3 mt-1'>
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[0]} alt="" />
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[1]} alt="" />
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[2]} alt="" />
                        </div>
                    </div>
                    <div
                        className="bg-slate-300 h-32 w-32 border-2 "
                        style={customClipPathStyle}>
                        <img className=' h-44 w-48' src={teamData.jahirul.memberImg} alt="" />
                    </div>
                    </motion.div>




                {/* 5st team member information */}

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 },
                    }}
                    transition={{ duration: 0.9 }}
                    className="relative flex items-center mt-7 md:mt-0  gap-10 md:w-[50%]">
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="text-[#0def3e] w-6 h-6 absolute -bottom-2 left-52">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>
                    <hr className='border-[#0def3e] border w-[157px] absolute -bottom-2 left-16' />
                    <hr className='border-[#0def3e] border h-[20px] absolute -bottom-2 left-16' />
                    <div
                        className="bg-gray-400 h-32 w-32 border-2  "
                        style={customClipPathStyle}>
                        <img className=' h-36 w-36' src={teamData.kakan.memberImg} alt="" />
                    </div>
                    <div className=''>
                        <h3>{teamData.kakan.teamName}</h3>
                        <h2 className='text-xl text-slate-400 font-semibold border-b border-[#84a98c]'>{teamData.kakan.position}</h2>
                        <div className='flex  gap-3 mt-1'>
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[0]} alt="" />
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[1]} alt="" />
                            <img className='w-5 h-5 rounded-full' src={teamData.SocialImg[2]} alt="" />
                        </div>
                    </div>
                    </motion.div>




            </div>
            {/* end  */}


        </div>
    );
};

export default OurTeam;