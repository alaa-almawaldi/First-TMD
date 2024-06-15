import { Box, Flex, HStack } from "@chakra-ui/react";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import Accounts from "../contents/superAmin/Accounts";
import Airports from "../contents/superAmin/Airports";
import Books from "../contents/superAmin/Books";
import Home from "../contents/superAmin/Home";
import Hotels from "../contents/superAmin/Hotels";
import Places from "../contents/superAmin/Places";
import Reports from "../contents/superAmin/Reports";
import Trips from "../contents/superAmin/Trips";
import { SidebarData } from "../sidebarData";

const SuperAdminDashboard = () => {
  return (
    <>
      <NavBar path="/admin" />
      <HStack alignItems={"flex-start"}>
        {/* <Box width={200}> */}
        <SideBar sidebarData={SidebarData} />
        {/* </Box> */}
        <Outlet />
        <Routes>
          <Route
            path="accounts"
            element={
              <div style={{ width: "80vw", marginTop: "100px" }}>
                <Accounts />
              </div>
            }
          />
          <Route
            path="places"
            element={
              <div style={{ width: "80vw", marginTop: "100px" }}>
                <Places />
              </div>
            }
          />
          <Route
            path="airports"
            element={
              <div style={{ width: "80vw", marginTop: "100px" }}>
                <Airports />
              </div>
            }
          />
          <Route
            path="hotels"
            element={
              <div style={{ width: "80vw", marginTop: "100px" }}>
                <Hotels />
              </div>
            }
          />
          <Route
            path="trips"
            element={
              <div style={{ width: "80vw", marginTop: "100px" }}>
                <Trips />
              </div>
            }
          />
          <Route
            path="books"
            element={
              <div style={{ width: "80vw", marginTop: "100px" }}>
                <Books />
              </div>
            }
          />
          <Route
            path="reports"
            element={
              <div style={{ width: "80vw", marginTop: "100px" }}>
                <Reports />
              </div>
            }
          />
          <Route
            index
            element={
              <div style={{ width: "80vw", marginTop: "100px" }}>
                <Home />
              </div>
            }
          />
        </Routes>
      </HStack>
    </>
  );
};

export default SuperAdminDashboard;
