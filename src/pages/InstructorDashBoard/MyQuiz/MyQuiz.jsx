import useInstructorQuiz from "../../../Hooks/useInstructorQuiz";

const MyQuiz = () => {
  const [instructorQuiz] = useInstructorQuiz();
  return (
    <div className="h-screen">
      <div className="py-10 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {instructorQuiz?.map((iq, i) => (
          <div
            key={iq._id}
            className="bg-white text-black shadow-lg rounded-lg overflow-hidden p-6"
          >
            <div>
              <h2 className="text-xl font-bold">
                {i + 1}. {iq.question}
              </h2>
            </div>
            <div className="pt-2">
              <div className="grid gap-2 grid-cols-2">
                {iq?.options?.map((op, i) => (
                  <span key={i}>
                    {i + 1}. {op}
                  </span>
                ))}
              </div>
            </div>
            <div className="py-2 font-semibold text-sm">
              Correct Answer : {iq.correctAnswer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyQuiz;
