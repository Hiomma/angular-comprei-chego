import { Users } from "../users/users.model"
import { ProductImages } from "./product-images.model"

export class Products {
    cd_Product: number
    nm_Product: string
    vl_Product: number
    nr_Quantity: number
    nr_Sold: number
    cd_User: number
    ds_Detail: string
    dt_Created: string
    dt_Updated: string
    dt_Disabled: string
    ds_Image: string

    user: Users
    product_Images: ProductImages[]

    constructor(
        { cd_Product,
            nm_Product,
            vl_Product,
            nr_Quantity,
            nr_Sold,
            cd_User,
            ds_Detail,
            dt_Created,
            dt_Updated,
            dt_Disabled,
            ds_Image,
            user,
            product_Images
        }: Products
    ) {
        this.cd_Product = cd_Product
        this.nm_Product = nm_Product
        this.vl_Product = vl_Product
        this.nr_Quantity = nr_Quantity
        this.nr_Sold = nr_Sold
        this.cd_User = cd_User
        this.ds_Detail = ds_Detail
        this.dt_Created = dt_Created
        this.dt_Updated = dt_Updated
        this.dt_Disabled = dt_Disabled
        this.ds_Image = ds_Image

        this.user = user
        this.product_Images = product_Images
    }
}