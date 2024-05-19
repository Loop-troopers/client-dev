import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MyHome from "./routes/MyHome/MyHome";
import BookmarkList from "./routes/BookmarkList/BookmarkList";
import NoticeList from "./routes/NoticeList/NoticeList";
import NotFound from "./errors/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <NoticeList />,
      },
      {
        path: "/bookmark",
        element: <BookmarkList />,
      },
      {
        path: "/profile",
        element: <MyHome />,
      },
    ],
  },
]);
