import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { QueryHeader } from 'src/app/models/query/query-header.model';
import { QueryModel } from 'src/app/models/query/query.model';
import { Copy } from '../utils/utils';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private apollo: Apollo) {
    }

    async Get_Query(objArrayQueries: QueryModel[], variables?: any) {
        let query = 'query'

        if (objArrayQueries.some(element => element.header.length > 0)) {
            query += "("

            const objArrayQuery: QueryHeader[] = []

            for (let query of objArrayQueries) {
                for (let objHeader of query.header) {
                    if (!objArrayQuery.some(element => element.field == objHeader.field))
                        objArrayQuery.push(objHeader)
                }
            }

            query += objArrayQuery.map(element => element.field + ":" + element.type).join(",")

            query += ")"
        }

        query += "{"

        query += objArrayQueries.map(element => element.query).join(" ")

        query += "}"

        return Copy((await this.apollo.query({ query: gql`${query}`, variables }).toPromise()).data) as Promise<any>
    }
}
