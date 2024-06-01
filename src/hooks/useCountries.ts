import APIClient from "../services/api-client";
import { useQuery } from '@tanstack/react-query';
import { Category } from "./useCategories";


const apiClient = new APIClient<Country[]>('/admin/get_all_country');


export interface Country {
  id: string;
  name: string;
}


export const useCountries = () =>useQuery({
    queryKey: ['country'],
    queryFn: apiClient.getAll,

})

export default useCountries;