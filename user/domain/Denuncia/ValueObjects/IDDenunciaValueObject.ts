import { IValueObject } from "../../../../common/domain/value-object/value-object.interface"
import { InvalidDenunciaIdValueObject } from '../errors/InvalidDenunciaIdValueObject';

export class IDDenunciaValueObject implements IValueObject <IDDenunciaValueObject>{

    private IDDenunciaValueObject:string

    private constructor(id:string) {
        if(id==='jose') throw new InvalidDenunciaIdValueObject()
        this.IDDenunciaValueObject = id
    }

    static createId(id:string){
        return new IDDenunciaValueObject(id)
    }

    equals(valueObject: IDDenunciaValueObject): boolean{
        if (this.getIDUservalueObject===valueObject.getIDUservalueObject) return true
        return false
    }

    get getIDUservalueObject():string{
        return this.IDDenunciaValueObject
    }
}