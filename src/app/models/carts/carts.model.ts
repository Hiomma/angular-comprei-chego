import { Products } from "../products/products.model"
import { Users } from "../users/users.model"

export class Carts {
    cd_User: number
    cd_Product: number
    nr_Quantity: number
    cd_Cart: number
    ds_Search: string
    b_Removed: boolean = false
    dt_Created: string

    product: Products
    user: Users
}

