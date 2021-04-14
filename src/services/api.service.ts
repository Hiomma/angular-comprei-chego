import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private apollo: Apollo) {
    }

    Get_Query(objArrayQueries: [], variables: any) {

        
        this.apollo.query({ query, variables }).toPromise()
    }
}
