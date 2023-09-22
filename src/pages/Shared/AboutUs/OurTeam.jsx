import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const teamData =
{
    "id": 1,

    "SocialImg": ["https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-logo-facebook-icon-png-image_3566127.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055", "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png", "https://w7.pngwing.com/pngs/267/531/png-transparent-portfolio-briefcase-showcase-business-adobe-portfolio-adobe-family-software-icon-thumbnail.png"],

    "tanjir":
    {
        "teamName": "Tanjir Hasan",
        "memberImg": "https://i.ibb.co/c1G27yn/Picsart-23-07-09-06-01-59-082-1.jpg",
    },

    "id": 2,
    "shamim":
    {
        "teamName": "MD Shamim Miah",
        "memberImg": "https://i.ibb.co/tbpwNBs/shamim-removebg-preview.png",
    },

    "id": 3,
    "sumaiya":
    {
        "teamName": "Sumaiya Akhter",
        "memberImg": "https://i.ibb.co/ZzYRd8h/357120978-325846719996339-506195303330660579-n.jpg",
    },

    "id": 4,
    "jahirul":
    {
        "teamName": "Jahirul Islam",
        "memberImg": "https://i.ibb.co/Ltjr0sx/330782946-1368411313945971-4023861816698754852-n.jpg",


    },
    "id": 5,
    "kakan":
    {
        "teamName": "Kakan Chandra",
        "memberImg": "https://i.ibb.co/QHdQjWm/IMG20230626183352.png",
    },
};


const OurTeam = () => {
    const { theme } = useContext(ThemeContext);

    const customClipPathStyle = {

        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
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

        <div className={`${theme} pb-20`}>

            <div className='md:w-10/12 w-11/12 mx-auto'>
                <h2 className={`md:text-5xl text-4xl font-[Poppins] border-b-2 lg:w-1/3 w-11/12 mb-8 ${theme === 'dark' ? 'border-[#48cae4]' : theme === 'night' ? 'border-[#b79ced]' :
                    theme === 'light' ? 'border-[#3c6e71]' : ''}`}>Our Team</h2>
            </div>

            <div className="md:flex gap-20 items-center mt-20 lg:px-0 px-2">

                {/* 1st team member information */}

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 1.5 }}
                    className="relative flex justify-end gap-10 items-center md:w-[50%]" >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className={`${theme === 'dark' ? 'text-[#48cae4]' :
                            theme === 'night' ? 'text-[#b79ced]' :
                                theme === 'light' ? 'text-[#3c6e71]' : ''} w-6 h-6 absolute -top-2 right-52`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                    </svg>

                    <hr className={`border w-[157px] absolute -top-2 right-16 ${theme === 'dark' ? 'border-[#48cae4]' :
                        theme === 'night' ? 'border-[#b79ced]' :
                            theme === 'light' ? 'border-[#3c6e71]' : ''}`} />

                    <hr className={`border h-[20px] absolute -top-2 right-16 ${theme === 'dark' ? 'border-[#48cae4]' :
                        theme === 'night' ? 'border-[#b79ced]' :
                            theme === 'light' ? 'border-[#3c6e71]' : ''}`} />

                    <div className=' text-right  '>

                        <h3 style={{ fontFamily: "'Dancing Script', cursive" }} className='text-2xl'>{teamData.tanjir.teamName}</h3>

                        <p className='font-[Cinzel] text-xl'>tanjirhasan096@gmail.com</p>

                        <div className='flex justify-end gap-3 mt-2'>
                            <div className='.buttonBody'>
                                <div className="icons">
                                    <a href="https://www.facebook.com/tanjir.hasan.58" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md ' src={teamData?.SocialImg[0]} alt="" /></span>
                                        </div>
                                        <div className="text">Facebook </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/tanjir-hasan-74208a260" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[1]} alt="" /></span>
                                        </div>
                                        <div className="text">Linkedin </div>
                                    </a>
                                    <a href="https://github.com/Tanjir-Hasan" target='_blank'>
                                        <div className="layer">
                                            <span></span><span></span> <span></span><span></span>
                                            <span > <img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[2]} alt="" /></span>
                                        </div>
                                        <div className="text">Github </div>
                                    </a>
                                    <a href="https://tanjir-hasan.netlify.app/" target='_blank'>
                                        <div className="layer"><span></span><span></span> <span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[3]} alt="" /></span>
                                        </div>
                                        <div className="text">Portfolio</div>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="bg-gray-400 h-32 w-32 border-2"
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
                    transition={{ duration: 1.5 }}

                    className="relative flex  gap-10 items-center mt-7 md:mt-0 md:w-[50%]">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className={`w-6 h-6 absolute -top-2 left-52 ${theme === 'dark' ? 'text-[#48cae4]' :
                            theme === 'night' ? 'text-[#b79ced]' :
                                theme === 'light' ? 'text-[#3c6e71]' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                    </svg>

                    <hr className={`border w-[157px] absolute -top-2 left-16 ${theme === 'dark' ? 'border-[#48cae4]' :
                        theme === 'night' ? 'border-[#b79ced]' :
                            theme === 'light' ? 'border-[#3c6e71]' : ''}`} />

                    <hr className={`border h-[20px] absolute -top-2 left-16 ${theme === 'dark' ? 'border-[#48cae4]' :
                        theme === 'night' ? 'border-[#b79ced]' :
                            theme === 'light' ? 'border-[#3c6e71]' : ''}`} />

                    <div className="bg-slate-300 h-32 w-32 border-2 border-zinc-900 p-2"
                        style={customClipPathStyle} >
                        <img className=' h-32 w-32' src={teamData?.shamim.memberImg} alt="" />
                    </div>

                    <div className=''>

                        <h3 style={{ fontFamily: "'Dancing Script', cursive" }} className='text-2xl'>{teamData?.shamim.teamName}</h3>

                        <p className='font-[Cinzel] text-xl'>shamimmiah2525@gmail.com</p>

                        <div className='flex  gap-3 mt-1 '>
                            <div className='.buttonBody'>
                                <div className="icons">
                                    <a href="https://www.facebook.com/mdshamimmiah77990" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md ' src={teamData?.SocialImg[0]} alt="" /></span>
                                        </div>
                                        <div className="text">Facebook </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/md-shamim-miah-9b6677278" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[1]} alt="" /></span>
                                        </div>
                                        <div className="text">Linkedin </div>
                                    </a>
                                    <a href="https://github.com/Shamim-dm" target='_blank'>
                                        <div className="layer">
                                            <span></span><span></span> <span></span><span></span>
                                            <span > <img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[2]} alt="" /></span>
                                        </div>
                                        <div className="text">Github </div>
                                    </a>
                                    <a href="https://shamim-portfolio-1.netlify.app" target='_blank'>
                                        <div className="layer"><span></span><span></span> <span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[3]} alt="" /></span>
                                        </div>
                                        <div className="text">Portfolio</div>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

            {/* end  */}

            {/* 3 number member information */}

            <div className='mx-auto my-5 md:mx-0'>
                <div className='lg:flex gap-5 items-center justify-center'>

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        transition={{ duration: 1.5 }}
                        className="relative lg:text-right text-center" >

                        <h2 style={{ fontFamily: "'Dancing Script', cursive" }} className='text-2xl'>{teamData.sumaiya.teamName}</h2>

                        <p className='font-[Cinzel] text-xl'>sumaiyasrn6@gmail.com</p>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 -right-6 absolute top-3 ${theme === 'dark' ? 'text-[#48cae4]' :
                            theme === 'night' ? 'text-[#b79ced]' :
                                theme === 'light' ? 'text-[#3c6e71]' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                        transition={{ duration: 1.5 }}>

                        <div className=" bg-slate-500 h-32 w-32 border-2 lg:mx-0 mx-auto"
                            style={customClipPathStyle}>
                            <img className='h-30 w-36' src={teamData.sumaiya.memberImg} alt="" />
                        </div>

                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 100 },
                        }}
                        transition={{ duration: 1.5 }}
                        className="relative " >

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 absolute -left-6 bottom-3 ${theme === 'dark' ? 'text-[#48cae4]' :
                            theme === 'night' ? 'text-[#b79ced]' :
                                theme === 'light' ? 'text-[#3c6e71]' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                        <div className='flex lg:justify-end justify-center gap-3 mt-1 '>
                            <div className='.buttonBody'>
                                <div className="icons">
                                    <a href="https://www.facebook.com/profile.php?id=100077130393018&mibextid=ZbWKwL" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md ' src={teamData?.SocialImg[0]} alt="" /></span>
                                        </div>
                                        <div className="text">Facebook </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sumaiya-akhter-enuka-11b877271/" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[1]} alt="" /></span>
                                        </div>
                                        <div className="text">Linkedin </div>
                                    </a>
                                    <a href="https://github.com/SumaiyaAK" target='_blank'>
                                        <div className="layer">
                                            <span></span><span></span> <span></span><span></span>
                                            <span > <img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[2]} alt="" /></span>
                                        </div>
                                        <div className="text">Github </div>
                                    </a>
                                    <a href="https://rich-play.surge.sh/" target='_blank'>
                                        <div className="layer"><span></span><span></span> <span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[3]} alt="" /></span>
                                        </div>
                                        <div className="text">Portfolio</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                </div>

            </div>

            {/* 4st team member information */}

            <div className="md:flex gap-20 mx-auto lg:px-0 px-2">

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 1.5 }}
                    className="relative flex justify-end gap-10 items-center md:w-[50%]" >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className={`w-6 h-6 absolute -bottom-2 right-52 ${theme === 'dark' ? 'text-[#48cae4]' :
                            theme === 'night' ? 'text-[#b79ced]' :
                                theme === 'light' ? 'text-[#3c6e71]' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>

                    <hr className={`border w-[157px] absolute -bottom-2 right-16 ${theme === 'dark' ? 'border-[#48cae4]' :
                        theme === 'night' ? 'border-[#b79ced]' :
                            theme === 'light' ? 'border-[#3c6e71]' : ''}`} />

                    <hr className={`border h-[20px] absolute -bottom-2 right-16 ${theme === 'dark' ? 'border-[#48cae4]' :
                        theme === 'night' ? 'border-[#b79ced]' :
                            theme === 'light' ? 'border-[#3c6e71]' : ''}`} />

                    <div className='text-right '>

                        <h3 style={{ fontFamily: "'Dancing Script', cursive" }} className='text-2xl'>{teamData.jahirul.teamName}</h3>

                        <p className='font-[Cinzel] text-xl'>jahirulislam41185@gmail.com</p>

                        <div className='flex justify-end gap-3 mt-1'>
                            <div className='.buttonBody'>
                                <div className="icons">
                                    <a href="https://www.facebook.com/ujahir.islam" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md ' src={teamData?.SocialImg[0]} alt="" /></span>
                                        </div>
                                        <div className="text">Facebook </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/jahirul-islam-b4223b267" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[1]} alt="" /></span>
                                        </div>
                                        <div className="text">Linkedin </div>
                                    </a>
                                    <a href="https://github.com/jahirul94" target='_blank'>
                                        <div className="layer">
                                            <span></span><span></span> <span></span><span></span>
                                            <span > <img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[2]} alt="" /></span>
                                        </div>
                                        <div className="text">Github </div>
                                    </a>
                                    <a href="https://jahirulislam.web.app/" target='_blank'>
                                        <div className="layer"><span></span><span></span> <span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[3]} alt="" /></span>
                                        </div>
                                        <div className="text">Portfolio</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-slate-300 h-32 w-32 border-2"
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
                    transition={{ duration: 1.5 }}
                    className="relative flex items-center mt-7 md:mt-0  gap-10 md:w-[50%]">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className={`w-6 h-6 absolute -bottom-2 left-52 ${theme === 'dark' ? 'text-[#48cae4]' :
                            theme === 'night' ? 'text-[#b79ced]' :
                                theme === 'light' ? 'text-[#3c6e71]' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>

                    <hr className={`border w-[157px] absolute -bottom-2 left-16 ${theme === 'dark' ? 'border-[#48cae4]' :
                        theme === 'night' ? 'border-[#b79ced]' :
                            theme === 'light' ? 'border-[#3c6e71]' : ''}`} />

                    <hr className={`border h-[20px] absolute -bottom-2 left-16 ${theme === 'dark' ? 'border-[#48cae4]' :
                        theme === 'night' ? 'border-[#b79ced]' :
                            theme === 'light' ? 'border-[#3c6e71]' : ''}`} />

                    <div className="bg-gray-400 h-32 w-32 border-2  "
                        style={customClipPathStyle}>
                        <img className=' h-36 w-36' src={teamData.kakan.memberImg} alt="" />
                    </div>

                    <div className=''>

                        <h3 style={{ fontFamily: "'Dancing Script', cursive" }} className='text-2xl'>{teamData.kakan.teamName}</h3>

                        <p className='font-[Cinzel] text-xl'>kakondebnath96@gmail.com</p>

                        <div className='flex  gap-3 mt-1'>
                            <div className='.buttonBody'>
                                <div className="icons">
                                    <a href="https://www.facebook.com/kalloldebnath.kakon" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md ' src={teamData?.SocialImg[0]} alt="" /></span>
                                        </div>
                                        <div className="text">Facebook </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/kakanchandra96" target='_blank'>
                                        <div className="layer"><span></span><span></span><span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[1]} alt="" /></span>
                                        </div>
                                        <div className="text">Linkedin </div>
                                    </a>
                                    <a href="https://github.com/KakonDebnath" target='_blank'>
                                        <div className="layer">
                                            <span></span><span></span> <span></span><span></span>
                                            <span > <img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[2]} alt="" /></span>
                                        </div>
                                        <div className="text">Github </div>
                                    </a>
                                    <a href="https://kakanchandra.netlify.app" target='_blank'>
                                        <div className="layer"><span></span><span></span> <span></span><span></span>
                                            <span ><img className='w-8 h-8 rounded-md' src={teamData?.SocialImg[3]} alt="" /></span>
                                        </div>
                                        <div className="text">Portfolio</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </motion.div>

            </div>

            {/* end  */}

        </div>
    );
};

export default OurTeam;