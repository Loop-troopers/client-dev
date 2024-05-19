import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/global-style.ts";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
