import { useState } from "react";
import { useForm } from "react-hook-form";

const NewsForm = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <div className="border border-spacing-4 pt-4 pb-8 rounded bg-slate-100">
                <div className="flex space-x-2 mx-4">
                    <img src={user?.photoUrl} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                    <input type="text" name="" id="" onClick={() => setIsModalOpen(true)} className="w-full border border-spacing-3 rounded-xl px-2" placeholder="Post Your Questions" />
                </div>
            </div>
            {/* modal body  */}
            {isModalOpen && (
                <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg lg:w-1/3">
                    <button onClick={() => setIsModalOpen(false)} className=" bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded absolute right-2 top-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                    {/* display content  */}
                    <div>
                        <div className="flex space-x-2 ">
                            <img src={user?.photoUrl} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                            <div>
                                <p className="text-lg font-bold pt-2">{user?.name}</p>
                                <select className="w-full border rounded-md focus:ring focus:ring-blue-300">
                                    <option value="option1">Friends</option>
                                    <option value="option2">Public</option>
                                    <option value="option3">Only me</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <div className="my-2 w-1/2">
                            <p className="text-md font-semibold mb-2">Select Category : </p>
                            <select required {...register("category")} className="w-full border rounded-md focus:ring focus:ring-blue-300">
                                <option>Educational</option>
                                <option>Science</option>
                                <option>Health</option>
                                <option>Technology</option>
                                <option>Food</option>
                                <option>Books</option>
                            </select>
                        </div>
                        <textarea rows="4" {...register("text")} type="text" id="" className="w-full border border-spacing-2 rounded-xl px-2 py-2" placeholder="write your questions"></textarea><br />
                        <div className="mt-8">
                            <button type="submit" className="w-full border border-slate-500 text-slate-500 rounded-md px-4 py-2 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out">Post</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default NewsForm;