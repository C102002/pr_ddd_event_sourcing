
export interface IDomainService <D,R>{
    execute ( domain: D ): Promise<R>
}