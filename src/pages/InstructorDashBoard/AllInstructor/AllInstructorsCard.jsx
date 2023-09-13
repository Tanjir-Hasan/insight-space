const AllInstructorsCard = ({instructor}) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
                <div>
                    <img
                        className="h-48 w-full object-cover md:w-48"
                        src={instructor?.photoURL}
                        alt="instructor image"
                    />
                </div>
                <div className="p-8">
                    <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{instructor?.displayName}</p>
                    <p className="mt-2 text-gray-500">{instructor?.email}</p>
                    <p>Join date : {instructor?.date}</p>
                </div>
            </div>
        </div>
    );
};

export default AllInstructorsCard;