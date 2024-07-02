import { ApplicationServiceEntryDto } from "../../../common/application/application-services/dto/application-service-entry.dto"

export interface DTODenuncia extends ApplicationServiceEntryDto{
    userId:string
    idPost:string
    text:string
    category:string
}