import { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import moment from "moment/moment";


const UsersFeedBack = () => {
    const { user } = useAuth();
    const [feedbacks, setFeedbacks] = useState([])

    const url = `https://insight-space-server.vercel.app/feedback?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFeedbacks(data))

    }, [])

    return (
        <div className="">

            <div className="md:w-10/12 w-11/12 mx-auto">

                <h1 className='text-center md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#84a98c] lg:pt-20 pt-10 '>
                    Submitted FeedBacks
                </h1>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-20'>
                {
                    feedbacks?.map(f => <div key={f._id} className='hover:bg-[#84a98c] duration-500 rounded-b-xl p-20 border-double border-4 border-sky-500 hover:text-white'>
                        <div className=''>
                            <h4 className='text-2xl font-[Poppins] mb-5'>Name: {f.userName}</h4>
                            <p className='font-[Cinzel]'>Email : {f.email}</p>
                            <p className='font-[Cinzel]'>Feedback: {f.message}</p>
                            <p className='font-[Cinzel]'>Rating: {f.rating}</p>
                            <p className='font-[Cinzel]'>Date: {moment(f.date).format('LLL')}</p>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default UsersFeedBack;