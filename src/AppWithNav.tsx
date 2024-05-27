import { Outlet } from "react-router-dom";
import TopNavBar from "./components/TopNavigationBar/TopNavBar";
import BottomNavBar from "./components/BottomNavigationBar/BottomNavBar";

function AppWithNav() {
  return (
    <>
      <TopNavBar />
      <Outlet />
      <BottomNavBar />
    </>
  );
}

export default AppWithNav;
