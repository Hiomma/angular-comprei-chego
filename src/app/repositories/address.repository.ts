import { Injectable } from '@angular/core';
import { Addresses } from '../models/addresses/addresses.model';
import { objAddressesAdd as objInsertAddresses, objAddressesQuery } from '../queries/addresses.query';
import { ApiService } from '../services/api.service';


@Injectable({
    providedIn: 'root'
})
export class AddressRepository {

    constructor(private apiService: ApiService) {
    }

    async Get_Addresses(cd_User: number) {
        const response = await this.apiService.Get_Query([objAddressesQuery], { cd_User })

        return response.addresses
    }

    async Set_Insert_Addresses(object: Addresses) {
        const response = await this.apiService.Get_Mutation([objInsertAddresses], { object })

        return response.insert_addresses_one
    }
}
