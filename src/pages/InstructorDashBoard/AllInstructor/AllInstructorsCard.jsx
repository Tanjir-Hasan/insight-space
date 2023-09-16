
const AllInstructorsCard = ({ instructor }) => {

    const { photoURL, email, displayName, educationLevel,
        instituteName, passingYear, subject, degreeTitle } = instructor;


    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
                <div>
                    <img
                        className="h-full w-full md:w-52 rounded-xl"
                        src={photoURL}
                        alt="instructor image"
                    />
                </div>
                <div className="px-6 py-4">
                    <p className="text-2xl font-bold mb-2">{displayName}</p>
                    <p className="text-md font-semibold">Email : {email}</p>
                    <p className="text-md font-semibold">Education : {educationLevel}</p>
                    <p className="text-md font-semibold">Institute Name : {instituteName}</p>
                    <p className="text-md font-semibold">Passing Year : {passingYear}</p>
                    <p className="text-md font-semibold">Subject : {subject}</p>
                    <p className="text-md font-semibold">Degree Title : {degreeTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default AllInstructorsCard;