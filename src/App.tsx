import "./App.css";
import BackgroundSlider from "react-background-slider";
import image1 from "./images/wall4.jpg";
import image2 from "./images/wall5.jpg";
import image3 from "./images/wall6.jpg";
import ColorModeSwitch from "./component/ColorModeSwitch";
import WelcomeForm from "./component/WelcomeForm";
import NavBar from "./component/NavBar";
import UserProfile from "./component/UserProfile";
import Textra from "react-textra";
import { ChakraProvider, Container, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import { COLORS } from "./colors";
import { PhoneIcon } from "@chakra-ui/icons";
import SideBar from "./component/SideBar";
//import { SidebarData } from "./sidebarData";

import { FiMenu, FiHome, FiUsers } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { BiTrip } from "react-icons/bi";
import { MdLocalAirport } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa6";
import { SidebarData } from "./sidebarData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import TripAdminDashboard from "./pages/TripAdminDashboard";
import AirportAdminDashboard from "./pages/AirportAdminDashboard";
import HotelAdminDashboard from "./pages/HotelAdminDashboard";
import UserTable from "./component/UserTable";
import PlaceCard from "./component/PlaceCard";
import PlaceForm from "./component/PlaceForm";
import PlaceModal from "./component/placeModal";

function App() {
  return (
    <>
      <ColorModeSwitch />
      <UserTable />
      <PlaceCard />
      <PlaceModal />
      {/* <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<SuperAdminDashboard />} />
        <Route path="/trip" element={<TripAdminDashboard />} />
        <Route path="/airport" element={<AirportAdminDashboard />} />
        <Route path="/hotel" element={<HotelAdminDashboard />} />
        <Route path="/" element={<Redirect to={getRoleBasedPath(role)} />} /> {/* Redirect to appropriate dashboard 
      </Routes>
    </BrowserRouter> */}
      {/* ----------------------------------------------------- */}
      {/* <ChakraProvider><NavBar />
        <SideBar sidebarData={SidebarData}/>
        <ColorModeSwitch /> */}
      {/*
      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={5}
        transition={2}
      />{" "}
      <HStack>
        <Container p={0}>
          <WelcomeForm />
        </Container>
        <Show breakpoint="(min-width: 800px)">
          <Container
            p={0}
            fontSize={40}
            w="300px"
            fontFamily="Pacifico"
            color={COLORS.darkblue}
          >
            Managment Trips.. Planes.. Hotels..
          </Container>
        </Show>
      </HStack> */}
      {/* <UserProfile /> */}
      {/* </ChakraProvider> */}
    </>
  );
}

export default App;
