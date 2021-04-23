import { Injectable } from '@angular/core';
import { Purchases } from '../models/purchases/purchases.model';
import { objInsertPurchases, objPurchasesQuery } from '../queries/purchases.query';
import { ApiService } from '../services/api.service';


@Injectable({
    providedIn: 'root'
})
export class PurchaseRepository {

    constructor(private apiService: ApiService) {
    }

    async Get_Purchases(cd_Buyer: number) {
        const response = await this.apiService.Get_Query([objPurchasesQuery], { cd_Buyer })

        return response.purchases
    }

    async Set_Insert_Purchases(object: Purchases) {
        const response = await this.apiService.Get_Mutation([objInsertPurchases], { object })

        return response.insert_purchases_one
    }
}
