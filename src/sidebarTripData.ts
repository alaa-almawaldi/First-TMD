import { BiTrip } from "react-icons/bi";
import { FaHotel } from 'react-icons/fa';
import {
    FiHome
} from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { MdLocalAirport } from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/trip-admin',
        icon: FiHome,
    }, 
    {
        title: 'My Trips',
        path: '/trip-admin/trips',
        icon: BiTrip,
    },
    {
        title: 'Airports',
        path: '/trip-admin/airports',
        icon: MdLocalAirport,
    },
    {
        title: 'Hotels',
        path: '/trip-admin/hotels',
        icon: FaHotel,
    },
    
    {
        title: 'books',
        path: '/trip-admin/books',
        icon: LiaSwatchbookSolid,
    },
    {
        title: 'Reports',
        path: '/trip-admin/reports',
        icon: HiOutlineDocumentReport,
    }
]