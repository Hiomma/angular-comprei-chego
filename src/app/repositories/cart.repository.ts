import { Injectable } from '@angular/core';
import { Carts } from '../models/carts/carts.model';
import { objCartsQuery, objDeleteCarts, objInsertCarts, objUpdateCarts } from '../queries/carts.query';
import { ApiService } from '../services/api.service';
import { Copy } from '../utils/utils';


@Injectable({
    providedIn: 'root'
})
export class CartRepository {

    constructor(private apiService: ApiService) {
    }

    async Get_Carts(cd_User: number) {
        const response = await this.apiService.Get_Query([objCartsQuery], { cd_User })

        return response.carts
    }

    async Set_Insert_Carts(object: Carts) {
        object.cd_User = 1

        const response = await this.apiService.Get_Mutation([objInsertCarts], { object })

        return response.insert_carts_one
    }


    async Set_Update_Carts(object: Carts) {
        let objCopy = Copy(object)

        delete (objCopy.cd_Product)
        delete (objCopy.cd_Cart)
        delete (objCopy.cd_User)

        const response = await this.apiService.Get_Mutation([objUpdateCarts], { cd_Cart: object.cd_Cart, set: objCopy })

        return response.update_products_by_pk
    }

    async Set_Delete_Carts(cd_Cart: number) {
        const response = await this.apiService.Get_Mutation([objDeleteCarts], { cd_Cart })

        return response.delete_products_by_pk
    }
}
