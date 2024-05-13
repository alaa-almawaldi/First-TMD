import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
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
        path: '/',
        icon: FiHome,
    },
    {
        title: 'Accounts',
        path: '/reports',
        icon: FiUsers,
    },
    {
        title: 'Places',
        path: '/products',
        icon: FaChartArea,
    },
    {
        title: 'Airports',
        path: '/team',
        icon: MdLocalAirport,
    },
    {
        title: 'Hotels',
        path: '/messages',
        icon: FaHotel,
    },
    {
        title: 'Trips',
        path: '/support',
        icon: BiTrip,
    },
    {
        title: 'books',
        path: '/support',
        icon: LiaSwatchbookSolid,
    },
    {
        title: 'Reports',
        path: '/support',
        icon: HiOutlineDocumentReport,
    }
]