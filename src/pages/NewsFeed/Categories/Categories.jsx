import { useEffect, useState } from "react";
import usePosts from "../../../Hooks/usePosts";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../StateManagment/Posts/categoriesSlice";
import Search from "../Search/Search";
import useAuth from "../../../Hooks/useAuth";
import { TiThMenuOutline } from 'react-icons/ti';

const Categories = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [posts] = usePosts();

    const { checkedCategories, setCheckedCategories } = useAuth();

    const dispatch = useDispatch();

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
    }, [checkedCategories, posts, dispatch]);

    return (
        <>
            {/* this is hide on all device except on large */}

            <div className="lg:w-3/12 lg:fixed mb-5 left-0 px-5 hidden sm:hidden md:hidden lg:block xl:block">

                <Search></Search>
                <p className="text-xl font-semibold font-[Poppins]">Select Your Favourite Categories</p>

                <div className="flex flex-wrap lg:block">
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


            <div className="lg:hidden md:block mb-4">

            <>
                <div className='flex items-center gap-5 my-2' onClick={() => setIsOpen(!isOpen)}>
                    <h1 className='font-[Cinzel] text-xl'>Menu</h1>
                    <TiThMenuOutline />
                </div>

                {isOpen && (
                    <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
                        <Search />
                        <p className="text-xl font-semibold font-[Poppins]">
                            Select Your Favourite Categories
                        </p>

                        <div className="flex flex-wrap lg:block">
                            {Categories &&
                                Categories.map((c) => (
                                    <div
                                        key={c._id}
                                        className="px-4 hover:scale-105 duration-700 mb-2 font-[Cinzel]"
                                    >
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
                                ))}
                        </div>
                    </div>
                )}
            </>

        </div>

        </>
    );
};

export default Categories;
