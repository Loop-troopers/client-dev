import { Outlet } from "react-router-dom";
import TopNavBar from "./components/TopNavigationBar/TopNavBar";
import BottomNavBar from "./components/BottomNavigationBar/BottomNavBar";

function App() {
  // axios.defaults.withCredentials = true;

  return (
    <>
      <TopNavBar />
      <Outlet />
      <BottomNavBar />
    </>
  );
}

export default App;
