import { ApplicationServiceEntryDto } from "./dto/application-service-entry.dto"

export interface IApplicationService<D extends ApplicationServiceEntryDto, R> {
    execute ( data: D ): Promise<R>
    get name (): string

}