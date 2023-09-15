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
import Addquiz from "../Addquiz/Addquiz";
import SSLPaymentSuccess from "../pages/Shared/PaidMember/SSLPayment/SSLPaymentSuccess/SSLPaymentSuccess";
import PaymentHistory from "../pages/Shared/PaidMember/PaymentHistory/PaymentHistory";
import InstructorLayout from "../layouts/InstructorLayout";
import InstructorHome from "../pages/InstructorDashBoard/InstructorHome/InstructorHome";
import ProDashboard from "../pages/Shared/ProMembership/MembershipDashboard/ProDashboard";
import MockTest from "../pages/Shared/ProMembership/MockTest/MockTest";
import LiveExam from "../pages/Shared/ProMembership/LiveExam/LiveExam";
import ModelTest from "../pages/Shared/ProMembership/ModelTest/ModelTest";
import SingleChat from "../ChatApplication/SingleChat/SingleChat";
import QuizDashboard from "../pages/Shared/ProMembership/QuizDashboard/QuizDashboard";
import QuizRules from "../pages/Shared/ProMembership/QuizRules/QuizRules";
import SSLPaymentFail from "../pages/Shared/PaidMember/SSLPayment/SSLPaymentFail/SSLPaymentFail";
import LeaderBoard from "../pages/Shared/ProMembership/LeaderBoard/LeaderBoard";
import InstructorApplication from "../pages/InstructorDashBoard/InstructorApplication/InstructorApplication";
import UsersPaymentHistory from "../pages/InstructorDashBoard/PaymentHistory/UsersPaymentHistory";
import AllInstructor from "../pages/InstructorDashBoard/AllInstructor/AllInstructor";
import MyQuiz from "../pages/InstructorDashBoard/MyQuiz/MyQuiz";
import AddQuiz from "../pages/InstructorDashBoard/AddQuiz/AddInstructorQuiz";
import DownLoadCertificate from "../pages/Shared/ProMembership/DownLoadCertificate/DownLoadCertificate";
import PremiumRoute from "./PremiumRoute";
import InstructorRoute from "./InstructorRoute";


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
        path: "instructor-application",
        element: <PrivateRoute><InstructorApplication></InstructorApplication></PrivateRoute>
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "instructor-payment",
        element: <PrivateRoute><PaidMembers></PaidMembers></PrivateRoute>
      },
      {
        path: "payments-history",
        element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      },
      {
        path: "connections",
        element: <PrivateRoute><FriendsAndSearch></FriendsAndSearch></PrivateRoute>
      }
      ,
      //ssl payment
      {
        path: "/payment/success/:transaction_Id",
        element: <SSLPaymentSuccess></SSLPaymentSuccess>
      },
      {
        path: "/payment/fail/:transaction_Id",
        element: <SSLPaymentFail></SSLPaymentFail>
      },
      //ssl payment
      {
        path: 'pro-memberShip',
        element: <ProDashboard></ProDashboard>,
        children: [
          {
            path: "quiz-dashboard",
            element: <QuizDashboard></QuizDashboard>
          },
          {
            path: "mock-test",
            element: <MockTest></MockTest>
          },
          {
            path: "live-exam",
            element: <PremiumRoute><LiveExam></LiveExam></PremiumRoute>
          },
          {
            path: "model-test",
            element: <PremiumRoute><ModelTest></ModelTest></PremiumRoute>
          },
          {
            path: "quiz-rules",
            element: <QuizRules></QuizRules>
          },
          {
            path: "download-certificate",
            element: <PremiumRoute><DownLoadCertificate></DownLoadCertificate></PremiumRoute>
          },
          {
            path: "leader-board",
            element: <PremiumRoute><LeaderBoard></LeaderBoard></PremiumRoute>
          },
          {
            path: "all-Instructors",
            element: <PrivateRoute><AllInstructor></AllInstructor></PrivateRoute>
          },

        ]
      },
      {
        path: "single-chat",
        element: <PrivateRoute><SingleChat></SingleChat></PrivateRoute>
      },
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
  },
  {
    path: "instructor-dashboard",
    element: <InstructorRoute><InstructorLayout></InstructorLayout></InstructorRoute>,
    children: [
      {
        path: "home",
        element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
      },
      {
        path: "payment-history",
        element: <InstructorRoute><UsersPaymentHistory></UsersPaymentHistory></InstructorRoute>
      },
      {
        path: "my-quiz",
        element: <InstructorRoute><MyQuiz></MyQuiz></InstructorRoute>
      },
      {
        path: "add-quiz",
        element: <InstructorRoute><AddQuiz></AddQuiz></InstructorRoute>
      }
    ]
  }
]);

export default router;