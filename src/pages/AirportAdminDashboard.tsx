import React from "react";
import NavBar from "../component/NavBar";
import { HStack } from "@chakra-ui/react";
import SideBar from "../component/SideBar";
import { Outlet, Route, Routes } from "react-router-dom";
import { SidebarData } from "../sidebarAirportData";
import Airports from "../contents/airportAdmin/Airports";
import Home from "../contents/airportAdmin/Home";

const AirportAdminDashboard = () => {
  return (
    <>
      <NavBar />
      <HStack>
        <SideBar sidebarData={SidebarData} />
        <Routes>
          <Route path="airports" element={<Airports />} />
          <Route index element={<Home />} />
        </Routes>
        <Outlet />
      </HStack>
    </>
  );
};

export default AirportAdminDashboard;
