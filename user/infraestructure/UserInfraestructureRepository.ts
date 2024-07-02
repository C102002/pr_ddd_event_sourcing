import { IUserRepository } from "../domain/Interfaces/IUserRespository";
import { User } from "../domain/User/User";
import { IDuserValueObject } from "../domain/User/ValueObjects/IDUserValueObject";
import { NameuserValueObject } from "../domain/User/ValueObjects/NameUserValueObject";
import { USerStateValueObject, UserState } from "../domain/User/ValueObjects/UserStateValueObject";

export class UserInfraestructureRepository implements IUserRepository{
    getUserById(id: string): User {
        return new User(
        IDuserValueObject.createId('123'),
        NameuserValueObject.createNameUser('pepe','jose','panza','chayane'),
        USerStateValueObject.createUserState(UserState.active)
    )
    }

}