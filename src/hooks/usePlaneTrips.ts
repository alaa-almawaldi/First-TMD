import APIClient from "../services/api-client";
import { useQuery } from '@tanstack/react-query';

export interface PlaneTrip {
    id: string;
    current_price: string;
    avaliable_seats: number;
    flight_date: Date;
    landing_date: Date;
}
                    // "airport_source_id": 1,
                    // "airport_destination_id": 3,
                    // "country_source_id": 1,
                    // "country_destination_id": 2,
const apiClient = new APIClient<PlaneTrip[]>('admin/get-all-plane-admin-trip');

export const useTripPlanes = () =>useQuery({
    queryKey: ['trips_plane'],
    queryFn: apiClient.getAll,

})