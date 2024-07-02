import { DenunciaPostApplicationService } from './../../application/DenunciaPostApplicationService';
import { DTODenuncia } from '../DTOEntry/DTODenuncia';

export class DenunciaController{
    execute(data:DTODenuncia):void{
        let denunciaUseCase=new DenunciaPostApplicationService()
    }
}