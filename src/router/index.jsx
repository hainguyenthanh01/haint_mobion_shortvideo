// import React from "react";
// import CommonLayout from "../Layout/CommonLayout";
// import ShortVideo from "../components/ShortVideo";
// import Channel from "../Components/Channel";
// import HashTag from "../Components/HashTag";
// import LiveStream from "../Components/LiveStream";
// import LoveVideo from "../Components/LoveVideo";
// import Profile from "../Components/Profile";
// import VideoLayout from "../Layout/VideoLayout";
// import FollowVideo from "../Components/FollowVideo";
// import SearchResult from "../Components/SearchResult";
// import Pricing from "../Components/Pricing";
// import LoginV2 from "../Components/LoginV2";
// import OAuthSocial from "../Components/OAuthSocial";
// import OAuthSocialSuccess from "../Components/OAuthSocialSuccess";
// import ChangePassword from "../Components/ChangePassword";
// import { getUser } from "../utils/localStorage";
// import { Navigate, useLocation } from "react-router-dom";
// import { setReqPage } from "../utils/auth";

import FollowVideo from "../components/FollowVideo";
import HashTag from "../components/HashTag";
import LoveVideo from "../components/LoveVideo";
// import LoveVideo from "../components/LoveVideo";
import ShortVideo from "../components/ShortVideo";
import VideoLayout from "../layouts/VideoLayout";

// const RequireAuth = ({ children }) => {
//   const user = getUser();
//   const location = useLocation();
//   if (!user) {
//     setReqPage(location.pathname);
//   } else {
//     setReqPage("/");
//   }

//   return user ? (
//     children
//   ) : (
//     <Navigate
//       to={`/login?reqPage=${encodeURIComponent(location.pathname)}`}
//       replace
//       state={{ path: location.pathname }}
//     ></Navigate>
//   );
// };
// const normalRoutes = {
//   path: "*",
//   element: <CommonLayout />,
//   children: [
//     {
//       path: "profile",
//       element: (
//         <RequireAuth>
//           <Profile />
//         </RequireAuth>
//       ),
//     },
//     {
//       path: "my-package",
//       element: (
//         <RequireAuth>
//           <Pricing />
//         </RequireAuth>
//       ),
//     },
//     {
//       path: "channel/:channelId",
//       element: <Channel />,
//     },
//     {
//       path: "search",
//       element: <SearchResult />,
//     },
//     {
//       path: "tag/:hashtagId",
//       element: <HashTag />,
//     },
//     {
//       path: "dang-theo-doi",
//       element:
//         localStorage.getItem("hasFollow") == 1 ? (
//           <ShortVideo />
//         ) : (
//           <FollowVideo />
//         ),
//     },
//   ],
// };
const videoRoute = {
  path: "*",
  element: <VideoLayout />,
  children: [
    {
      index: true,
      element: <ShortVideo />,
    },
    {
      path: "danh-cho-ban",
      element: <ShortVideo />,
    },
    {
        path: "dang-theo-doi",
        element: <FollowVideo />,
    },
    {
      path: "hashtag/:hashtagId",
      element: <HashTag />,
  },
  // {
  //   path: "yeu-thich",
  //   element: <LoveVideo/>
  // }
    

    // {
    //   path: "live",
    //   element: <LiveStream />,
    // },
    // {
    //   path: "yeu-thich",
    //   element: (
    //     <RequireAuth>
    //       <LoveVideo />
    //     </RequireAuth>
    //   ),
    // },
  ],
};
// const loginRoute = {
//   path: "*",
//   element: null,
//   children: [
//     { path: "login", element: <LoginV2 /> },
//     { path: "auth/oauth", element: <OAuthSocial /> },
//     { path: "auth/success", element: <OAuthSocialSuccess /> },
//     {
//       path: "u/change-password",
//       element: (
//         <RequireAuth>
//           <ChangePassword />
//         </RequireAuth>
//       ),
//     },
//   ],
// };

// const routes = [normalRoutes, videoRoute, loginRoute];
const routes = [ videoRoute];

export default routes;
