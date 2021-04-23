import { Products } from "../products/products.model"
import { Purchases } from "./purchases.model"

export class PurchaseProducts {
    cd_Purchase: number
    cd_Product: string
    nr_Quantity: number
    vl_Products_Total: number

    product: Products
    purchase: Purchases
}