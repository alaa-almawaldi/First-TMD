// static


import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from "axios";
import APIClient from "../services/api-client";
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient<Trip>('/admin-profile');

export interface Trip {
    id: string;
    trip_name: string;
    price: number;
    number_of_people: number;
    trip_capacity: number;
    start_date: Date;
    end_date: Date;
    stars: number;
    trip_note: string;
    // type: String;
}

export const useTrips = () =>useQuery({
    queryKey: ['trips'],
    queryFn: apiClient.getAll,

})

export default useTrips;


