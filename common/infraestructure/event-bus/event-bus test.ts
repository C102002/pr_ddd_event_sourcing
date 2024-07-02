
import { DomainEvent } from '../../domain/domain-event/domain-event'
import { IEventHandler } from '../../application/event-handler/event-handler.interface'
import { IEventSubscriber } from '../../application/event-handler/subscriber.interface'

interface key{
    key:string
}

interface event{
    function:FunctionConstructor
}

export class EventBus implements IEventHandler {

    private instance: IEventHandler
    
    private subscribers: {[key: string]: (( event: DomainEvent ) => Promise<void>)[]}

    private constructor()
    {
        this.subscribers = {}
    }

    public getInstance(): IEventHandler {
        if (!this.instance)
            return this.instance = new EventBus()
        return this.instance
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