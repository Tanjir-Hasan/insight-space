import Member1 from '../../../assets/images/Members/1647335729415.jpg'
import Member2 from '../../../assets/images/Members/1684658745537.jpg'
import Member3 from '../../../assets/images/Members/1688860235186.jpg'
import Member4 from '../../../assets/images/Members/1686930064508.jpg'
import Member5 from '../../../assets/images/icons/sun.png'






const OurTeam = () => {
    



    return (
        <div>
            
            <div className='justify-center items-center mt-40 mb-40'>

            <div className='md:w-10/12 w-11/12 mx-auto'>
                <h2 className='md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#84a98c] lg:w-1/2 w-11/12 mb-8'>Our Team</h2>
            </div>

                <div className='grid grid-cols-1 lg:grid-cols-5 gap-20 ml-20 md: w-5/6 justify-center items-center'>
                
                    <div className="shadow-lg  mb-5 bg-body-tertiary rounded h-84 w-64 p-4 border-4">
                        <img src={Member1}></img>
                        <div>
                            <h4 class="image-heading">Kakon Chandra Debnath</h4>
                            <p class="image-description">Mern Stack Developer</p>
                        </div>

                    </div>
                    
                    <div className="shadow-lg  mb-5 bg-body-tertiary rounded h-84 w-64 p-4 border-4">
                        <img src={Member2}></img>
                        <div>
                            <h4 class="image-heading">Jahirul Islam</h4>
                            <p class="image-description">Full Stack Developer</p>
                        </div>

                    </div>
                    <div className="shadow-lg  mb-5 bg-body-tertiary rounded h-84 w-64 p-4 border-4">
                        <img src={Member3}></img>
                        <div>
                            <h4 class="image-heading">Tanjir Hasan</h4>
                            <p class="image-description">Full Stack Developer</p>
                        </div>

                    </div>
                    <div className="shadow-lg  mb-5 bg-body-tertiary rounded h-84 w-64 p-4 border-4">
                        <img src={Member4}></img>
                        <div>
                            <h4 class="image-heading">Sumaiya Akhter</h4>
                            <p class="image-description">Front End Developer</p>
                        </div>

                    </div>
                    <div className="shadow-lg  mb-5 bg-body-tertiary rounded h-84 w-64 p-4 border-4">
                        <img src="https://i.ibb.co/tbpwNBs/shamim-removebg-preview.png"></img>
                        <div>
                            <h4 class="image-heading">Md Shamim Mia</h4>
                            <p class="image-description">Mern Stack Developer</p>
                        </div>

                    </div>
                    
                </div>
                
            
            </div>
        </div>
    );
};

export default OurTeam;