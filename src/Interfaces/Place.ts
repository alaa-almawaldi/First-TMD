export interface Area {
    id: string;
    name: string;
    country: Country;
    places: Place[];
}
export interface Country {
    id: string;
    name: string;
    areas: Area[];
    area_places: Area[];
}
export interface Category {
    id: string;
    name: string;
}

export interface ImagePlace{
    id: string;
    place_id: string;
    image: string;
}

export interface Place {
    id: string;
    name: string;
    place_price: string;
    text: string;
    visible: boolean;
    images: ImagePlace[];
    categories: Category[];
    area: Area;

}