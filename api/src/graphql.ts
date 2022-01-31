
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
}

export interface UpdateUserInput {
    id: number;
    avatarUrl: string;
}

export interface IQuery {
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createUser(createUserInput?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
    updateUser(updateUserInput?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
}

type Nullable<T> = T | null;
