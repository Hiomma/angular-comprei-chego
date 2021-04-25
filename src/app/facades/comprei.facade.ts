import { Injectable } from '@angular/core';
import { Addresses } from '../models/addresses/addresses.model';
import { Carts } from '../models/carts/carts.model';
import { Products } from '../models/products/products.model';
import { Purchases } from '../models/purchases/purchases.model';
import { AddressRepository } from '../repositories/address.repository';
import { CartRepository } from '../repositories/cart.repository';
import { ProductRepository } from '../repositories/product.repository';
import { PurchaseRepository } from '../repositories/purchase.repository';
import { SectionRepository } from '../repositories/section.repository';


@Injectable({
    providedIn: 'root'
})
export class CompreiFacade {

    constructor(
        private sectionRepository: SectionRepository,
        private productRepository: ProductRepository,
        private addressRepository: AddressRepository,
        private purchaseRepository: PurchaseRepository,
        private cartRepository: CartRepository,
    ) {
    }

    Get_Sections_Products = () => this.sectionRepository.Get_Sections_Products()


    Get_Carts = (cd_User: number) => this.cartRepository.Get_Carts(cd_User)
    Set_Insert_Carts = (object: Carts) => this.cartRepository.Set_Insert_Carts(object)
    Set_Update_Carts = (object: Carts) => this.cartRepository.Set_Update_Carts(object)
    Set_Delete_Carts = (cd_Cart: number) => this.cartRepository.Set_Delete_Carts(cd_Cart)

    Get_Product = (cd_Product: number) => this.productRepository.Get_Product(cd_Product)
    Get_Products = () => this.productRepository.Get_Products()
    Set_Insert_Products = (object: Products) => this.productRepository.Set_Insert_Products(object)
    Set_Update_Products = (object: Products) => this.productRepository.Set_Update_Products(object)
    Set_Delete_Products = (cd_Product: number) => this.productRepository.Set_Delete_Products(cd_Product)

    Get_Purchases = (cd_Buyer: number) => this.purchaseRepository.Get_Purchases(cd_Buyer)
    Set_Insert_Purchases = (object: Purchases) => this.purchaseRepository.Set_Insert_Purchases(object)

    Get_Addresses = (cd_User: number) => this.addressRepository.Get_Addresses(cd_User)
    Set_Insert_Addresses = (object: Addresses) => this.addressRepository.Set_Insert_Addresses(object)
    Set_Update_Addresses = (object: Addresses) => this.addressRepository.Set_Update_Addresses(object)
    Set_Delete_Addresses = (cd_Address: number) => this.addressRepository.Set_Delete_Addresses(cd_Address)
}
