export class QueryHeader {
    field: string
    type: string

    constructor({ field, type }: QueryHeader) {
        this.field = field
        this.type = type
    }
}