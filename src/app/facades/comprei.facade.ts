import { Injectable } from '@angular/core';
import { Addresses } from '../models/addresses/addresses.model';
import { AddressRepository } from '../repositories/address.repository';
import { ProductRepository } from '../repositories/product.repository';
import { SectionRepository } from '../repositories/section.repository';


@Injectable({
    providedIn: 'root'
})
export class CompreiFacade {

    constructor(
        private sectionRepository: SectionRepository,
        private productRepository: ProductRepository,
        private addressRepository: AddressRepository,
    ) {
    }

    Get_Sections_Products = () => this.sectionRepository.Get_Sections_Products()


    Get_Product = (cd_Product: number) => this.productRepository.Get_Product(cd_Product)


    Get_Addresses = (cd_User: number) => this.addressRepository.Get_Addresses(cd_User)
    Set_Insert_Addresses = (object: Addresses) => this.addressRepository.Set_Insert_Addresses(object)
}
