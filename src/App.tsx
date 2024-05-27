import { Outlet } from "react-router-dom";

function App() {
  // axios.defaults.withCredentials = true;

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
