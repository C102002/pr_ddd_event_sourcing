import { IValueObject } from "../../../../common/domain/value-object/value-object.interface"
import { InvalidUserIdValueObject } from "../errors/InvalidUserIdValueObject"

export class IDuserValueObject implements IValueObject <IDuserValueObject>{

    private IDuserValueObject:string

    private constructor(id:string) {
        if(id==='pepe') throw new InvalidUserIdValueObject()
        this.IDuserValueObject = id
    }

    static createId(id:string){
        return new IDuserValueObject(id)
    }

    equals(valueObject: IDuserValueObject): boolean{
        if (this.getIDUservalueObject===valueObject.getIDUservalueObject) return true
        return false
    }

    get getIDUservalueObject():string{
        return this.IDuserValueObject
    }
}