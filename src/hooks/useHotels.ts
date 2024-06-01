import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from "axios";
import APIClient from "../services/api-client";
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient<Hotel>('/...');

export interface Room {
    capacity: number;
    status : boolean;
    price :  number;

}

export interface Hotel{
    id: string;
    name: string;
    rooms: number;
    stars: number;
    visible: boolean;
}

export const useHotels = () =>useQuery({
    queryKey: ['hotels'],
    queryFn: apiClient.getAll,

})

export default useHotels;


