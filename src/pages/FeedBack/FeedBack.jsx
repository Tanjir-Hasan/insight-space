import React from 'react';
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from '../../Hooks/UseAuth';



const FeedBack = () => {
    const { user } = useAuth()


    const handleFeedback = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const opinion = form.opinion.value;
        const rating = form.rating.value;
        const message = form.message.value;
        const email = user?.email;
        const date = form.date.value;

        const feedback = {
            userName: name,
            email,
            opinion,
            rating,
            date

        }
        console.log(feedback)

        fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Your response has been recorded')
                }
            })

    }

    return (
        <div>
            <div className="pb-40">
                <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto ">

                    <div className="space-y-5 md:px-0 px-6">

                        <h1 className="text-4xl mb-5 mt-10 font-bold font-[Poppins]">Give your Valuable Feedback</h1>

                        <ul className="font-[Cinzel]">
                            <li className="list-[upper-roman] list-inside">your feedback is our compass guiding us towards excellence.</li>

                            <li className="list-[upper-roman] list-inside">We value your insights, opinions, and suggestions as <br></br> they help us shape our products/services to better meet your needs.</li>

                            <li className="list-[upper-roman] list-inside">Our dedicated Feedback section is your direct line to us, where you can share your thoughts and experiences.</li>
                        </ul>


                        <form onSubmit={handleFeedback}>

                            <label htmlFor="message" className="block font-semibold mb-2">
                                Name:
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder='name' ></input>

                            <label htmlFor="message" className="block font-semibold mb-2">
                                Email:
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} placeholder='email'></input>

                            <label htmlFor="message" className="block font-semibold mb-2">
                                Date:
                            </label>
                            <input type="date" name="date" placeholder='email'></input>

                            <label htmlFor="message" className="block font-semibold mb-2 mt-4">
                                Message:
                            </label>
                            <input type="text" name="message" value=" " placeholder='name'></input>

                            <label htmlFor="comment" className="block font-semibold mb-5 mt-5">
                                Select a Comment:
                            </label>
                            {/* <label for="">Select a comment</label> */}
                            <select name="opinion" id="opinion">
                                <option value="Select">Select</option>
                                <option value="Great service! Really enjoyed the experience.">Great service! Really enjoyed the experience.</option>
                                <option value="Prompt response and excellent support.">Prompt response and excellent support.</option>
                                <option value="Outstanding service! Will definitely recommend.">Outstanding service! Will definitely recommend.</option>
                                <option value="Not bad! Like it.">Not bad! Like it.</option>
                                <option value="Not satisfied with the product quality.">Not satisfied with the product quality.</option>
                                <option value="Had a few issues, but they were quickly resolved.">Had a few issues, but they were quickly resolved.</option>
                            </select>

                            <label htmlFor="rating" className="block font-semibold mb-5 mt-5">
                                Rating:
                            </label>
                            {/* <label for="">Select a comment</label> */}
                            <select name="rating" id="rating">
                                <option value="Select">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3.5">3.5</option>
                                <option value="4">4</option>
                                <option value="4.5">4.5</option>
                                <option value="5">5</option>
                            </select>

                            <label htmlFor="#" className="block font-semibold mb-2">

                            </label>
                            <div className=''>
                                
                            <div className="md:w-38 md:mx-0  mx-aut mt-10">
                                <input className="text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-24 py-2 rounded-lg" type="submit" value="send feedback">

                                </input>
                            </div>

                            <div className="md:w-25  mt-10">
                                <Link to="/usersfeedback">
                                    <Button heading="Feedback Submisiions"></Button>
                                </Link>
                            </div>
                            </div>



                        </form>


                    </div>



                </div>


            </div>
        </div>
    );
};

export default FeedBack;






{/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
{
    feedback.map(feedback => <FbCard
        key={feedback._id}

        feedback={feedback}></FbCard>)
}

</div> */}

{/* <input className="w-50 h-50 rounded-r-3xl bg-emerald-600" type="submit" value="send feedback"></input> */ }

{/* <div className="md:w-8/12 mt-10 md:mx-0 w-11/12 mx-auto">
                                <Link to="/feedback">
                                    <Button heading="Send Feedback"></Button>
                                </Link>
                            </div> */}

