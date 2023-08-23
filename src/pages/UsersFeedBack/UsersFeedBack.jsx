import { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import FeedbackCard from "./FeedbackCard";


const UsersFeedBack = () => {
    const { user } = useAuth();
    const [feedbacks, setFeedbacks] = useState([])

    const url = `http://localhost:5000/feedback?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFeedbacks(data))

    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/feedback/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => { 
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successful');
                const remaining = feedbacks.filter(f => f._id !== id);
                setFeedbacks(remaining)

            }
            })
            
        }
    }

    const handleUpdate = id => {
        fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update
                const remaining = feedbacks.filter(f => f._id !== id);
                const updated =  feedbacks.find(f => f._id == id );
                updated.status ='confirm';
                const newFeedback = [updated, ...remaining];
                setFeedbacks(newFeedback);
            }
        })
    }

   

    return (
        <div className="md:w-10/12 w-11/12 mx-auto justify-center items-center h-screen ">

            <div className="md:w-10/12 w-11/12 mx-auto">

                <h1 className='text-center md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#84a98c] lg:pt-20 pt-10 '>
                    Submitted FeedBacks
                </h1>

            </div>

            <div className='items-center justify-center md:w-10/12 w-11/12 sm:w-10/12 mt-10 mx-auto '>
                {
                    feedbacks?.map(f => <FeedbackCard 
                    key={f._id} 
                    f={f} 
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    className='hover:bg-[#84a98c] duration-500 rounded-b-xl p-5 border-double border-4 border-sky-500 hover:text-white'>
                    
                </FeedbackCard>)
                }


            </div>
        </div>
    );
};

export default UsersFeedBack;


// grid grid-cols-1 lg:grid-cols-3 gap-4 p-20


// hover:bg-[#84a98c] duration-500 rounded-b-xl p-20 border-double border-4 border-sky-500 hover:text-white


// <div key={f._id} className=''>
//                         <div className=''>
//                             {/* <td> */}
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Email</th>
//                                         <th>Feedback</th>
//                                         <th>Rating</th>
//                                         <th>Date</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {/* row 1 */}
//                                     <tr>
//                                         <td>
//                                         <h4 className='text-xl font-[Poppins] mb-5 uppercase'>{f.userName}</h4>
//                                         </td>
//                                         <td><p className='font-[Cinzel]'>{f.email}</p></td>
//                                         <td><p className='font-[Cinzel]'>{f.message}</p></td>
//                                         <td><p className='font-[Cinzel]'>{f.rating}</p></td>
//                                         <td><p className='font-[Cinzel]'>{moment(f.date).format('LLL')}</p></td>
//                                     </tr>
//                                 </tbody>
                               
//                         </div>
//                     </div>