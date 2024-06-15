import { Area, Country } from "./Place";
import { User } from "./User";

export interface Airport {
    id: string;
    name: string;
    visible: boolean;
    country: Country;
    area: Area;
    user: User;
}