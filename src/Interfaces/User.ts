export interface Role {
    id: string;
    name: string;
}

export interface Position {
    id: string;
    name?: string;
}

export interface User {
    name: string;
    email: string;
    password: string;
    position: Position ; 
    phone_number:string;
    image: string;
    role: Role[] ;
    // for users
    is_approved: string;
    roles: Role[];

}