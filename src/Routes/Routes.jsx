import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/LoginAndSignup/Login/Login";
import Signup from "../pages/Shared/LoginAndSignup/Singup/Signup";
import BlogFeed from "../pages/BlogFeed/BlogFeed";
import ErrorPage from "../ErrorPage/ErrorPage";
import NewsFeed from "../pages/NewsFeed/NewsFeed/NewsFeed";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/news-feed",
                element:<NewsFeed></NewsFeed> 
            },
            {
                path: "/blog-feed",
                element: <BlogFeed></BlogFeed>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/sign-up",
                element: <Signup></Signup>
            }
        ]
    },
]);

export default router;