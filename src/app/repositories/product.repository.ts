import { Injectable } from '@angular/core';
import { Products } from '../models/products/products.model';
import { objDeleteProducts, objInsertProducts, objProductQuery, objProductsQuery, objUpdateProducts } from '../queries/products.query';
import { ApiService } from '../services/api.service';
import { Copy } from '../utils/utils';


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

    async Get_Products() {
        const response = await this.apiService.Get_Query([objProductsQuery])

        return response.products
    }

    async Set_Insert_Products(object: Products) {
        const response = await this.apiService.Get_Mutation([objInsertProducts], { object })

        return response.insert_products_one
    }

    async Set_Update_Products(object: Products) {
        let objCopy = Copy(object)

        delete (objCopy.cd_Product)
        delete (objCopy.cd_User)

        const response = await this.apiService.Get_Mutation([objUpdateProducts], { cd_Product: object.cd_Product, set: objCopy })

        return response.update_products_by_pk
    }

    async Set_Delete_Products(cd_Product: number) {
        const response = await this.apiService.Get_Mutation([objDeleteProducts], { cd_Product })

        return response.delete_products_by_pk
    }
}
