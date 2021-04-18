import { QueryHeader } from "./query-header.model";

export class QueryModel {
    header: QueryHeader[]
    query: string

    constructor({ header, query }: QueryModel) {
        this.header = header
        this.query = query
    }
}