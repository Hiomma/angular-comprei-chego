import { Payments } from "../payments/payments.model"
import { Users } from "../users/users.model"
import { PurchaseProducts } from "./purchase-products.model"
import { PurchaseStatus } from "./purchase-status.model"

export class Purchases {
    cd_Product: number
    cd_Purchase: number
    vl_Products_Total: number
    nr_Quantity: number

    user: Users
    purchase_Status: PurchaseStatus
    payment: Payments

    purchase_Products: PurchaseProducts[]
}