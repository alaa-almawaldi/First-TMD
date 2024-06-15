import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Airport } from "../Interfaces/Airport";

const apiClient = new APIClient<Plane[]>('admin/get-my-planes');



export interface Plane {
    id: string;
    name: string;
    ticket_price: number;
    visible: boolean;
    number_of_seats: number;
    airport: Airport;
}

export const usePlanes = () =>useQuery({
    queryKey: ['planes'],
    queryFn: apiClient.getAll,

})
export default usePlanes;


