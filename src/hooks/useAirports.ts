import { useQuery } from '@tanstack/react-query';
import { Area } from './useAreas';
import { Country } from './useCountries';
import { User } from './useUser';
import APIClient from "../services/api-client";

const apiClient = new APIClient<Airport[]>('/admin/all-airport');

export interface Airport {
    id: string;
    name: string;
    visible: boolean;
    country: Country;
    area: Area;
    user: User;
}

export const useAirports = () =>useQuery({
    queryKey: ['airport'],
    queryFn: apiClient.getAll,

})

export default useAirports;