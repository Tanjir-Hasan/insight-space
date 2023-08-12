import usePosts from "../../../Hooks/usePosts";


const Categories = () => {
      const [posts] = usePosts();

    // const educationHandle =()=>{
    //     const educationfind = posts.filter(education => education.category === 'Technology' )
    //     console.log(educationfind)
    // }
    return (
        <div className="">
            {
                posts && posts.map(c =>
                    <div key={c._id} className="px-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                            <span className="ml-2 text-gray-700">{c.category}</span>
                        </label>
                    </div>
                )}



                {/* <div className="px-4">
                <label className="flex items-center">
                            <input onClick={()=>educationHandle()} type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                            <span className="ml-2 text-gray-700">Educational</span>
                        </label>
                </div>

                <div className="px-4">
                <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                            <span className="ml-2 text-gray-700">Health</span>
                        </label>
                </div> */}

        </div>
    );
};

export default Categories;
