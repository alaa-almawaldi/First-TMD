import APIClient from "../services/api-client";
import { useQuery } from '@tanstack/react-query';
import { Category } from "./useCategories";
import { Country } from "./useCountries";


const apiClient = new APIClient<Area[]>('/..');

export interface Area {
  id: string;
  name: string;
  country: Country;
}

export const useAreas = () =>useQuery({
    queryKey: ['area'],
    queryFn: apiClient.getAll,

})

export default useAreas;