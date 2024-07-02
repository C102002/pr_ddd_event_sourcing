import { User } from "../User/User";

export interface IUserRepository{
    getUserById(id:string):User
}