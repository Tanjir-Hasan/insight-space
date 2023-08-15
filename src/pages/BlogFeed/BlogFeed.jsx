import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const BlogFeed = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <h1>this is BlogFeed</h1>
        </div>
    );
};

export default BlogFeed;