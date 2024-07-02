import { IApplicationService } from './../../common/application/application-services/application-service.interface';
import { DTODenuncia } from '../infraestructure/DTOEntry/DTODenuncia';
import { Either } from '../../common/shared/Either';
import { IUserRepository } from '../domain/Interfaces/IUserRespository';
import { IDenunciaRepository } from '../domain/Interfaces/IDenunciaRespository';
import { IPostRepository } from '../domain/Interfaces/IPostRespository';


export class DenunciaPostApplicationService implements IApplicationService <DTODenuncia,Either<boolean,Error>>{

    constructor(private userRepository:IUserRepository, private postRepository:IPostRepository, private denunciaRepositry:IDenunciaRepository) {
    }

    async execute(data: DTODenuncia): Promise<Either<boolean,Error>> {
        console.log('pepe');
        return Either.makeLeft(true)
    }
    get name(): string {
        return('DenunciaPostApplicationService')
    }

}