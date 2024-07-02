import { DomainEvent } from "../../../../common/domain/domain-event/domain-event";
import { IDuserValueObject } from "../ValueObjects/IDUserValueObject";
import { NameuserValueObject } from "../ValueObjects/NameUserValueObject";
import { USerStateValueObject } from "../ValueObjects/UserStateValueObject";

export class UserCreatedDomainEvent extends DomainEvent{
    private constructor(
        private iduser:IDuserValueObject,
        private nameUser:NameuserValueObject,
        private userState:USerStateValueObject) 
    {
        super();
    }
    static createUserEvent(
        iduser:IDuserValueObject,
        nameUser:NameuserValueObject,
        userState:USerStateValueObject){
        return new UserCreatedDomainEvent(
            iduser,
            nameUser,
            userState
        )
    }
}