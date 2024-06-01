// import { useState, useEffect } from 'react';
// import axios, { AxiosRequestConfig } from "axios";
// import APIClient from "../services/api-client";
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { User } from './useUser';


// export const useUserUpdate = () => {
//     const queryClient = useQueryClient();
  
//     const mutation = useMutation((data: User) => {
//       const apiClient = new APIClient<User>('/update-profile'); // Create new instance per mutation
//       return apiClient.post(data);
//     }
//     );
  
//     return mutation;
//   };

// export default useUserUpdate;