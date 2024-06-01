import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from "axios";
import APIClient from "../services/api-client";
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient<User>('/admin-profile');

export interface Role {
  id: string;
  name: string;
}

export interface Position {
  id: string;
  name: string;

}

export interface User {
    name: string;
    email: string;
    password: string;
    position: Position; 
    phone_number:string;
    image: string;
    role: Role[] ;
    // for users
    is_approved: string;
    roles: Role[];

}

export const useUser = () =>useQuery({
    queryKey: ['user'],
    queryFn: apiClient.getAll,

})

export default useUser;


