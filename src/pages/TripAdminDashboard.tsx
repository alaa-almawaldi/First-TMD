import React from "react";
import NavBar from "../component/NavBar";
import { HStack } from "@chakra-ui/react";
import SideBar from "../component/SideBar";
import { Outlet, Route, Routes } from "react-router-dom";
import Reports from "../contents/tripAdmin/Reports";
import Home from "../contents/tripAdmin/Home";
import { SidebarData } from "../sidebarTripData";
import Books from "../contents/tripAdmin/Books";
import NewTrip from "../contents/tripAdmin/NewTrip";
import Trips from "../contents/tripAdmin/Trips";

const TripAdminDashboard = () => {
  return (
    <>
      <NavBar path="/trip-admin"/>
      <HStack alignItems={"flex-start"} >
        <SideBar sidebarData={SidebarData} />
        <Routes>
          {/* <Route path="airports" element={<Airports />} />
          <Route path="hotels" element={<Hotels />} /> */}
          <Route path="trips" element={ <div style={{  marginTop: "80px" }}><Trips /></div>} />
          <Route path="new-trip" element={ <div style={{ width: "80vw", marginTop: "100px" }}><NewTrip /></div>} />
          <Route path="books" element={ <div style={{ width: "80vw", marginTop: "100px" }}><Books /></div>} />
          {/* <Route path="reports" element={<Reports />} /> */}
          <Route index element={<div style={{ width: "80vw", marginTop: "100px" }}><Home /></div>} />
        </Routes>
        <Outlet />
      </HStack>
    </>
  );
};

export default TripAdminDashboard;
