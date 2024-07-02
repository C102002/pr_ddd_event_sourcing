import { IValueObject } from "../../../../common/domain/value-object/value-object.interface"
import { InvalidUserIdValueObject } from "../errors/InvalidUserIdValueObject"

export class NameuserValueObject implements IValueObject <NameuserValueObject>{

    private firstName:string
    private secondName:string
    private firstLastname:string
    private secondLastName:string


    private constructor(
        firstName:string,
        secondName:string,
        firstLastname:string,
        secondLastName:string
    ){
        this.firstName=firstName
        this.secondName=secondName
        this.firstLastname=firstLastname
        this.secondLastName=secondLastName
    }

    static createNameUser(
        firstName:string,
        secondName:string,
        firstLastname:string,
        secondLastName:string){
        return new NameuserValueObject(firstName,secondName,firstLastname,secondLastName)
    }

    equals(valueObject: NameuserValueObject): boolean{
        if (this.getUserFirstName===valueObject.getUserFirstName) return true
        return false
    }

    get getUserFirstName():string{
        return this.firstName
    }

    get getUserFirstLastName():string{
        return this.firstLastname
    }

    get getUserSecondName():string{
        return this.secondName
    }

    get getUserSecondLastName():string{
        return this.secondLastName
    }
}