import { Optional } from '../../../common/shared/Optional';
import { Denuncia } from '../Denuncia/Denuncia';

export interface IDenunciaRepository{
    getDenunciaById(id:string):Optional<Denuncia>
}