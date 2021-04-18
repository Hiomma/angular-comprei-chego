import { Injectable } from '@angular/core';
import { objProductsQuery } from '../queries/products.query';
import { objSectionsQuery } from '../queries/section.query';
import { ApiService } from '../services/api.service';


@Injectable({
    providedIn: 'root'
})
export class SectionRepository {

    constructor(private apiService: ApiService) {
    }

    async Get_Sections_Products() {
        const response = await this.apiService.Get_Query([objSectionsQuery, objProductsQuery])

        return response
    }
}
