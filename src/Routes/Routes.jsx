import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/LoginAndSignup/Login/Login";
import Signup from "../pages/Shared/LoginAndSignup/Singup/Signup";
import NewsFeed from "../pages/NewsFeed/NewsFeed";
import BlogFeed from "../pages/BlogFeed/BlogFeed";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "news-feed",
                element: <NewsFeed></NewsFeed>
            },
            {
                path: "blog-feed",
                element: <BlogFeed></BlogFeed>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "sign-up",
                element: <Signup></Signup>
            }
        ]
    },
]);

export default router;