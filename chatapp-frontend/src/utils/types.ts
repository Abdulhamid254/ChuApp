export type ConverastionType = {
    id: number;
    name: string;
    lastMessage: string;
}

export type CreateUserParams = {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string"
}


export type UserCredentialsParams = {
    "email": "string",
    "password": "string"
}

export type User = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}