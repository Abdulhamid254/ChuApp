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