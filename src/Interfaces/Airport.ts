import { Area, Country } from "./Place";
import { User } from "./User";

export interface PlaneImage{
    id: string;
    plane_id: string;
    image:string;
}

export interface Plane{
    id: string;
    name: string;
    ticket_price: number;
    visible: boolean;
    number_of_seats: number;
    airport: Airport;
    images: PlaneImage[];
}

export interface Airport {
    id: string;
    name: string;
    visible: boolean;
    country: Country;
    area: Area;
    user: User;
}