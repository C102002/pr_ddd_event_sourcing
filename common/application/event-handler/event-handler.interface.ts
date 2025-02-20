import { DomainEvent } from '../../domain/domain-event/domain-event'
import { IEventSubscriber } from "./subscriber.interface"

export interface IEventHandler {
    publish ( events: DomainEvent[] ): Promise<void>
    subscribe ( eventName: string, callback: ( event: DomainEvent ) => Promise<void> ): Promise<IEventSubscriber>
}