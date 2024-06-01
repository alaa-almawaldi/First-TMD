import APIClient from "../services/api-client";
import { useQuery } from '@tanstack/react-query';
import { Category } from "./useCategories";
import { Area } from "./useAreas";


const apiClient = new APIClient<Place[]>('/admin/places');


export interface Place {
    id: string;
    name: string;
    place_price: number;
    text: string;
    visible: boolean;
    images: string[];
    categories: Category[];
    area: Area;

}

export const usePlaces = () =>useQuery({
    queryKey: ['place'],
    queryFn: apiClient.getAll,

})

export default usePlaces;