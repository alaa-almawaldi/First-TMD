import {
    FiMenu,
    FiHome,
    FiUsers,
  } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { BiTrip } from "react-icons/bi";
import { MdLocalAirport } from "react-icons/md";
import { FaHotel } from 'react-icons/fa';
import { FaChartArea } from 'react-icons/fa6';
import { Item } from './component/SideBar';

export const SidebarData = [
    {
        title: 'Home',
        path: '/hotel-admin',
        icon: FiHome,
    },
    {
        title: 'Hotels',
        path: '/hotel-admin/hotels',
        icon: FaHotel,
    },
]