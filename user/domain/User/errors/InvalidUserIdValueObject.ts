export class InvalidUserIdValueObject extends Error{
    constructor(){
        const message='Inavlid user Id please try another'
        super(message)    
    }
}