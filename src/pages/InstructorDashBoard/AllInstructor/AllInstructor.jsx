import { Link } from "react-router-dom";
import AllInstructorsCard from "./AllInstructorsCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "react-responsive-carousel";
import Button from "../../../components/Button";

const AllInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axiosSecure.get("/all-instructors")
            return res.data;
        }
    })

    return (
        <div>
             <div className='md:w-10/12 w-11/12 mx-auto'>
                {/* <h2 className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#48cae4]'} border-b-2 md:text-5xl text-4xl font-[Poppins] lg:w-1/2 w-11/12 mb-8`}>Peer To Peer learning</h2> */}
            </div>

            <div className='bg-fixed bg-[url("https://i.ibb.co/x72CKVn/pexels-photo-7381555.jpg")] bg-no-repeat bg-cover'>

                <div className='md:flex justify-between md:gap-10 lg:gap-16 py-20 px-10'>

                    <div className='w-full md:w-1/2 p-6 flex justify-center items-center bg-fixed bg-[#e5e5e5]/30 rounded-md mb-5 md:mb-0'>
                        <img className="rounded-md" src="https://i.ibb.co/z5Svnf6/pexels-photo-6929190.webp" />
                    </div>

                    <div className='w-full md:w-1/2 bg-slate-500 bg-opacity-60 p-6 md:p-8 lg:p-20'>

                        <p className='text-3xl font-[Poppins] font-semibold text-white pt-10'>Lead as an Instructor</p>
                        <p className='text-xl font-[Cinzel] pt-10 text-white text-justify'>An instructor is a knowledgeable and skilled individual who guides and educates students or learners in a particular subject or field of study, facilitating their understanding and mastery of the subject matter</p>
                        <div className="mt-10 md:w-8/12 md:mx-0 w-full item-center text-center">
                            <Link to="/instructor-application">
                                <Button heading="Apply"></Button>
                            </Link>
                        </div>

                    </div>
                    {/* <div className=' px-5 py-8 bg-opacity-40 rounded-xl shadow-xl shadow-[#3c6e71] md:h-32 h-36 md:w-[600px] w-[300px] hover:bg-[#3c6e71] hover:text-white duration-700'></div> */}

                </div>
                
            </div>
            
            {/* display all instructors  */}
            <div className="p-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    instructors && instructors?.map(i => <AllInstructorsCard key={i._id} instructor={i.instructorData}></AllInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default AllInstructor;