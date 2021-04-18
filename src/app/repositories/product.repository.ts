import { Injectable } from '@angular/core';
import { objProductQuery } from '../queries/products.query';
import { ApiService } from '../services/api.service';


@Injectable({
    providedIn: 'root'
})
export class ProductRepository {

    constructor(private apiService: ApiService) {
    }

    async Get_Product(cd_Product: number) {
        const response = await this.apiService.Get_Query([objProductQuery], { cd_Product })

        return response.products_by_pk
    }
}
