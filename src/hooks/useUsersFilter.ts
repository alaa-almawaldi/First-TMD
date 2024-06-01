import { useMutation, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { User } from "./useUser";
import { FilterState } from '../state-managment/FilterState';


const apiClient = new APIClient<User[]>('/filter');

const useUsers = (filter ) => {
    return useMutation<FetchResponse<User[]>, Error, typeof filter>({
      mutationFn: (filter ) => {
        console.log(filter); // This logs the filter object
        return apiClient.post(
            filter
        );
      },
    });
  };    

export default useUsers;