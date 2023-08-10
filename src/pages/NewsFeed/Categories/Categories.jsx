import { useEffect } from "react";
import { fetchPosts } from "../../../StateManagment/Posts/postSlice";
import { useDispatch, useSelector } from "react-redux";


const Categories = () => {

    // const books = useSelector((state) => state.booksReducer.books)
    // console.log(books)
    const { isLoading, posts, error } = useSelector(state => state.posts)
    console.log(posts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])


    // const educationHandle =()=>{
    //     const educationfind = posts.filter(education => education.category === 'Technology' )
    //     console.log(educationfind)
    // }
    return (
        <div className="">
            {
                posts && posts.map(categorie =>
                    <div key={categorie._id} className="px-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                            <span className="ml-2 text-gray-700">{categorie.category}</span>
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
