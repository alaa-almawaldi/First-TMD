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
        path: '/airport-admin',
        icon: FiHome,
    }, 
    {
        title: 'My Airports',
        path: '/airport-admin/airports',
        icon: MdLocalAirport,
    },
    
]