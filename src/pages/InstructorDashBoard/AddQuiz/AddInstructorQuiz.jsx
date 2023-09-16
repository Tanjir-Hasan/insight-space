import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ButtonWithLoading from "../../../components/ButtonWithLoading";
import useInstructorQuiz from "../../../Hooks/useInstructorQuiz";

const AddInstructorQuiz = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [instructorQuiz, refetch] = useInstructorQuiz();

    const handleQuiz = (e) => {
        e.preventDefault();
        const form = e.target;
        const question = form.question.value;
        const option1 = form.option1.value;
        const option2 = form.option2.value;
        const option3 = form.option3.value;
        const option4 = form.option4.value;
        const correctAnswer = form.correctAnswer.value;
        const categoryName = form.categoryName.value;
        const options = [option1, option2, option3, option4]

        const makeQuiz = {
            instructor: user?.email,
            question,
            options,
            correctAnswer,
            categoryName
        }

        axiosSecure.post("/instructorQuiz", makeQuiz)
            .then(data => {
                if (data.data) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your quiz has been uploaded',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(data.data);
                }

            })
            .catch(error => console.log(error.massage))
    };


    return (
        <div className='p-10'>
            <h2 className='text-black text-center font-semibold font-[Poppins] text-5xl '>Add Quiz</h2>
            <p className='text-black text-center mt-4 mb-4 font-[Poppins]'>Test Your Advertising Knowledge: Ad Quiz Challenge</p>
            <div className="bg-white h-46 rounded-lg border-2 backdrop-blur-sm bg-white/30 p-4 drop-shadow-lg">

                <form onSubmit={handleQuiz}>

                    <label htmlFor="message" className="block font-semibold mb-2 pl-2 pb-4">Question</label>
                    <input type="text" name="question" placeholder='Write Question' className='w-full  px-4 py-2 border border-gray-300 rounded focus:outline-none text-black' ></input>

                    <label htmlFor="message" className="block font- mt-4 mb-2 pl-2 font-semibold">Options</label>
                    <div className='grid lg:grid-cols-2 gap-10 mt-5  p-5 md:p-5'>
                        <input type="text" name="option1" placeholder='option1' className='w-96 mt-5 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none ' ></input>

                        <input type="text" name="option2" placeholder='option2' className='w-96 mt-5 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none ' ></input>

                        <input type="text" name="option3" placeholder='option3' className='w-96 mt-5 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none ' ></input>

                        <input type="text" name="option4" placeholder='option4' className='w-96 mt-5 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none ' ></input>

                    </div>
                    <div className=' grid lg:grid-cols-2 gap-10 mt-5  p-10 md:p-5'>
                        <div>
                            <label htmlFor="message" className="block font- mt-4 mb-2 font-semibold">Correct Answer</label>
                            <input type="text" name="correctAnswer" placeholder='Correct Answer' className='w-96 mt-5 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none ' ></input>
                        </div>
                        <div>
                            <label htmlFor="message" className="block font- mt-4 mb-2 font-semibold">Category Name</label>
                            <input type="text" name="categoryName" placeholder='Category Name' className='w-96 mt-5 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none ' ></input>
                        </div>
                    </div>
                    <div className=" md:w-38 md:mx-0  mx-auto mt-10 mb-10">
                        {/* fix submit button */}
                        <ButtonWithLoading width={"w-full"}>Upload Quiz</ButtonWithLoading>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddInstructorQuiz;