import { Injectable } from '@angular/core';
import { Addresses } from '../models/addresses/addresses.model';
import { objAddressesQuery, objDeleteAddresses, objInsertAddresses as objInsertAddresses, objUpdateAddresses } from '../queries/addresses.query';
import { ApiService } from '../services/api.service';
import { Copy } from '../utils/utils';


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

    async Set_Update_Addresses(object: Addresses) {
        let objCopy = Copy(object)

        delete (objCopy.cd_Address)
        delete (objCopy.cd_User)

        const response = await this.apiService.Get_Mutation([objUpdateAddresses], { cd_Address: object.cd_Address, set: objCopy })

        return response.update_addresses_by_pk
    }

    async Set_Delete_Addresses(cd_Address: number) {
        const response = await this.apiService.Get_Mutation([objDeleteAddresses], { cd_Address })

        return response.delete_addresses_by_pk
    }
}
