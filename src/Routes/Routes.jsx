import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/LoginAndSignup/Login/Login";
import Signup from "../pages/Shared/LoginAndSignup/Singup/Signup";
import BlogFeed from "../pages/BlogFeed/BlogFeed";
import ErrorPage from "../ErrorPage/ErrorPage";
import NewsFeed from "../pages/NewsFeed/NewsFeed/NewsFeed";
import QuesAndAns from "../pages/QuesAndAns/QuesAndAns";
import ResetPass from "../pages/Shared/LoginAndSignup/ResetPassword/ResetPass";
import ViewProfile from "../pages/NewsFeed/UserDetails/ViewProfile/ViewProfile";
import ContactForm from "../pages/Home/Support/ContactForm";
import FeedBack from "../pages/FeedBack/FeedBack";
import UsersFeedBack from "../pages/UsersFeedBack/UsersFeedBack";
import PrivateRoute from "../Routes/PrivateRoute";
import AdminRoute from "../Routes/AdminRoute";
import AllUsers from "../pages/AdminDeshBoard/AllUsers/AllUsers";
import AllPosts from "../pages/AdminDeshBoard/AllPosts/AllPosts";
import Quiz from "../pages/Quiz/Quiz";
import Chat from "../pages/Message/Chat";
import AboutUs from "../pages/Shared/AboutUs/AboutUs";
import PaidMembers from "../pages/Shared/PaidMember/PaidMembers";
import FriendsAndSearch from "../pages/Shared/FriendsAndSearch/FriendsAndSearch";
import AdminLayout from "../layouts/AdminLayout";
import AdminHome from "../pages/AdminDeshBoard/AdminHome/AdminHome";
import SSLCommerz from "../pages/SSLCommerz/SSLCommerz";
import Addquiz from "../Addquiz/Addquiz";
import SSLPaymentSuccess from "../pages/Shared/PaidMember/SSLPayment/SSLPaymentSuccess/SSLPaymentSuccess";
import PaymentHistory from "../pages/Shared/PaidMember/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "news-feed",
        element: (
          <PrivateRoute>
            <NewsFeed></NewsFeed>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "ques-ans",
        element: (
          <PrivateRoute>
            <QuesAndAns></QuesAndAns>
          </PrivateRoute>
        ),
      },
      {
        path: "blog-feed",
        element: (
          <PrivateRoute>
            <BlogFeed></BlogFeed>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "resetPassword",
        element: <ResetPass></ResetPass>,
      },
      {
        path: "sign-up",
        element: <Signup></Signup>,
      },
      {
        path: "view-Profile",
        element: (
          <PrivateRoute>
            <ViewProfile></ViewProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "support",
        element: <ContactForm></ContactForm>,
      },
      {
        path: "feedback",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "usersfeedback",
        element: <UsersFeedBack></UsersFeedBack>,
      },
      {
        path: "group-conversations",
        element: <Chat></Chat>,
      },
      {
        path: "quiz",
        element: <Quiz></Quiz>
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "paid-members",
        element: <PaidMembers></PaidMembers>
      },
      {
        path: "payments-history",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "connections",
        element: <FriendsAndSearch></FriendsAndSearch>
      }
      ,
      // //ssl payment
      // {
      //     path: "/payment/success/:transaction_Id",
      //     element: <SSLPaymentSuccess></SSLPaymentSuccess>
      // },
      {
        path: "ssl-commerz",
        element: <SSLCommerz></SSLCommerz>
      }
    ]
  },
  {
    path: "admin-dashboard",
    element: <AdminRoute><AdminLayout></AdminLayout></AdminRoute>,
    children: [
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'all-users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "all-posts",
        element: <AdminRoute><AllPosts></AllPosts></AdminRoute>
      },
      {
        path: "add-quiz",
        element: <AdminRoute><Addquiz></Addquiz></AdminRoute>
      }

    ]
  }
]);

export default router;