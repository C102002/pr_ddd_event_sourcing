
import { DomainEvent } from '../../domain/domain-event/domain-event'
import { IEventHandler } from '../../application/event-handler/event-handler.interface'
import { IEventSubscriber } from '../../application/event-handler/subscriber.interface'

export class EventBus implements IEventHandler {

    public static instance?: IEventHandler = undefined
    private subscribers: {[key: string]: (( event: DomainEvent ) => Promise<void>)[]}

    private constructor()
    {
        this.subscribers = {}
    }

    public static getInstance(): IEventHandler {
        return this.instance = new EventBus()
    }

    async publish ( events: DomainEvent[] ): Promise<void>
    {
        for ( const event of events ){
            const subscribers = this.subscribers[event.eventName] || []
            for ( const subscriber of subscribers ){
                await subscriber( event )
            }
        }
    }

    async subscribe ( eventName: string, callback: ( event: DomainEvent ) => Promise<void> ): Promise<IEventSubscriber>
    {
        if ( !this.subscribers[eventName] )
        {
            this.subscribers[eventName] = []
        }
        this.subscribers[eventName].push( callback )

        return {
            unsubscribe: () => {
                this.subscribers[eventName] = this.subscribers[eventName].filter( subscriber => subscriber !== callback )
            }
        }
    }
}