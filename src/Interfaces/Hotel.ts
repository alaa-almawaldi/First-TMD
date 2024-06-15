import { Area, Country } from "./Place";
import { User } from "./User";

export interface Room {
    capacity: number;
    status : boolean;
    price :  number;

}

export interface Hotel{
    id: string;
    name: string;
    number_rooms: number;
    stars: number;
    visible: boolean;
    area: Area;
    country: Country;
    user: User;
    image: string; // fix 
}