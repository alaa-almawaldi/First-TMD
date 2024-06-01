import React from "react";
import NavBar from "../component/NavBar";
import { HStack } from "@chakra-ui/react";
import SideBar from "../component/SideBar";
import { Outlet, Route, Routes } from "react-router-dom";
import { SidebarData } from "../sidebarHotelData";
import Hotels from "../contents/hotelAdmin/Hotels";
import Home from "../contents/hotelAdmin/Home";

const HotelAdminDashboard = () => {
  return (
    <>
      <NavBar />
      <HStack>
        <SideBar sidebarData={SidebarData} />
        <Routes>
          <Route path="hotels" element={<Hotels />} />
          <Route index element={<Home />} />
        </Routes>
        <Outlet />
      </HStack>
    </>
  );
};

export default HotelAdminDashboard;
