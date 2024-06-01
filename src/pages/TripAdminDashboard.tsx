import React from "react";
import NavBar from "../component/NavBar";
import { HStack } from "@chakra-ui/react";
import SideBar from "../component/SideBar";
import { Outlet, Route, Routes } from "react-router-dom";
import Trips from "../contents/tripAdmin/Trips";
import Reports from "../contents/tripAdmin/Reports";
import Home from "../contents/tripAdmin/Home";
import { SidebarData } from "../sidebarTripData";
import Books from "../contents/tripAdmin/Books";

const TripAdminDashboard = () => {
  return (
    <>
      <NavBar />
      <HStack>
        <SideBar sidebarData={SidebarData} />
        <Routes>
          {/* <Route path="airports" element={<Airports />} />
          <Route path="hotels" element={<Hotels />} /> */}
          <Route path="trips" element={<Trips />} />
          <Route path="books" element={<Books />} />
          <Route path="reports" element={<Reports />} />
          <Route index element={<Home />} />
        </Routes>
        <Outlet />
      </HStack>
    </>
  );
};

export default TripAdminDashboard;
