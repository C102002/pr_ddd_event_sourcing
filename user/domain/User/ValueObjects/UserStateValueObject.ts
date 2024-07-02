import { IValueObject } from "../../../../common/domain/value-object/value-object.interface"
import { InvalidUserIdValueObject } from "../errors/InvalidUserIdValueObject"

export enum UserState{
    active="active",
    warned="warned",
    suspended="suspended"
} 

export class USerStateValueObject implements IValueObject <USerStateValueObject>{

    private userState:UserState

    private constructor(userState:UserState) {
        if(userState===UserState.warned) throw new InvalidUserIdValueObject()
        this.userState=userState
    }

    static createUserState(state:UserState){
        return new USerStateValueObject(state)
    }

    equals(valueObject: USerStateValueObject): boolean{
        if (this.getUserState===valueObject.getUserState) return true
        return false
    }

    get getUserState():string{
        return this.userState
    }
}