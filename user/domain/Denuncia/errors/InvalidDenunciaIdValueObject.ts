export class InvalidDenunciaIdValueObject extends Error{
    constructor(){
        const message='Inavlid denuncia Id please try another'
        super(message)    
    }
}