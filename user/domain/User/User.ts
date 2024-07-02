import { AggregateRoot } from '../../../common/domain/aggregate-root/aggregate-root';
import { DomainEvent } from '../../../common/domain/domain-event/domain-event';
import { IDuserValueObject } from './ValueObjects/IDUserValueObject';
import { NameuserValueObject } from './ValueObjects/NameUserValueObject';
import { USerStateValueObject } from './ValueObjects/UserStateValueObject';
import { UserCreatedDomainEvent } from './events/UserCreated';

export class User extends AggregateRoot<IDuserValueObject>{
    private iDuserValueObject:IDuserValueObject
    private nameuserValueObject:NameuserValueObject
    private uSerStateValueObject:USerStateValueObject

    get getIduser():IDuserValueObject{
        return this.iDuserValueObject
    }
    
    get getName():NameuserValueObject{
        return this.nameuserValueObject
    }

    get USerStateValueObject():USerStateValueObject{
        return this.uSerStateValueObject
    }

    constructor(iduser:IDuserValueObject,nameUser:NameuserValueObject,userState:USerStateValueObject){
        let createUserEvent=UserCreatedDomainEvent.createUserEvent(iduser,nameUser,userState)
        super(iduser,createUserEvent)
    }

    protected applyEvent(event: DomainEvent): void {
        throw new Error('Method not implemented.');
    }
    protected ensureValidState(): void {
        throw new Error('Method not implemented.');
    }

}