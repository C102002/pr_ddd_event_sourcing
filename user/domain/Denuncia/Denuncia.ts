import { AggregateRoot } from '../../../common/domain/aggregate-root/aggregate-root';
import { DomainEvent } from '../../../common/domain/domain-event/domain-event';
import { IDDenunciaValueObject } from './ValueObjects/IDDenunciaValueObject';

export class Denuncia extends AggregateRoot<IDDenunciaValueObject>{
    protected applyEvent(event: DomainEvent): void {
        throw new Error('Method not implemented.');
    }
    protected ensureValidState(): void {
        throw new Error('Method not implemented.');
    }

}