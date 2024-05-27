import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // 네비게이션바 없는 App
import AppWithNav from "./AppWithNav"; // 네비게이션바 있는 App
import MyHome from "./routes/MyHome/MyHome";
import BookmarkList from "./routes/BookmarkList/BookmarkList";
import NoticeList from "./routes/NoticeList/NoticeList";
import NotFound from "./errors/NotFound";
import Login from "./routes/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 네비게이션바 없는 App
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <AppWithNav />, // 네비게이션바 있는 App
    children: [
      {
        path: "bookmark",
        element: <BookmarkList />,
      },
      {
        path: "profile",
        element: <MyHome />,
      },
      {
        path: "notices",
        element: <NoticeList />,
      },
    ],
  },
]);
