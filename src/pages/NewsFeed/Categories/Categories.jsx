import { useState } from "react";
import usePosts from "../../../Hooks/usePosts";


const Categories = () => {
    const [posts] = usePosts();
    const [checkedCategories, setCheckedCategories] = useState([]);
    // console.log(checkedCategories)

    const Categories = posts.filter((post, index, self) =>
        index === self.findIndex((p) => p.category === post.category)
    );

    const handleCheckboxChange = (category) => {
        if (checkedCategories.includes(category)) {
            setCheckedCategories(checkedCategories.filter(c => c !== category));
        } else {
            setCheckedCategories([...checkedCategories, category]);
        }
    };
//  console.log(Categories);

    return (
        <div>
            {
                Categories && Categories.map(c =>
                    <div key={c._id} className="px-4">
                        <label className="flex items-center">
                            <input
                                name="category"
                                value={c.category}
                                type="checkbox"
                                className="form-checkbox text-indigo-600 h-5 w-5"
                                checked={checkedCategories.includes(c.category)}
                                onChange={() => handleCheckboxChange(c.category)}
                            />
                            <span className="ml-2 text-gray-700">{c.category}</span>
                        </label>
                    </div>
                )}
        </div>
    );
};

export default Categories;
