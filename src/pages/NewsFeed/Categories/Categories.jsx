import { useEffect, useState } from "react";
import usePosts from "../../../Hooks/usePosts";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../StateManagment/Posts/categoriesSlice";


const Categories = () => {
    const [posts] = usePosts();
    const dispatch = useDispatch();
    const [checkedCategories, setCheckedCategories] = useState([]);
    const Categories = posts?.filter((post, index, self) =>
        index === self.findIndex((p) => p.category === post.category)
    );

    const handleCheckboxChange = (category) => {
        if (checkedCategories.includes(category)) {
            setCheckedCategories(checkedCategories.filter(c => c !== category));
        } else {
            setCheckedCategories([...checkedCategories, category]);
        }
    };
    useEffect(() => {
        const data = posts?.filter(p => checkedCategories.includes(p.category))
        dispatch(setCategories(data));
    }, [checkedCategories, posts, dispatch])

    return (
        <div>
            <div className="px-4 py-4">
                <p className="text-xl font-semibold font-[Poppins]">Select Your Favourite Categories</p>
            </div>
            <div>
                {
                    Categories && Categories.map(c =>
                        <div key={c._id} className="px-4 hover:scale-105 duration-700 mb-2 font-[Cinzel]">
                            <label className="flex items-center">
                                <input
                                    name="category"
                                    value={c.category}
                                    type="checkbox"
                                    className="form-checkbox text-indigo-600 h-5 w-5"
                                    checked={checkedCategories.includes(c.category)}
                                    onChange={() => handleCheckboxChange(c.category)}
                                />
                                <span className="ml-2">{c.category}</span>
                            </label>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;
