export class ProductImages {
    cd_Product: number
    cd_Product_Image: number
    ds_Image: string
    b_Main: boolean

    constructor(
        { cd_Product,
            cd_Product_Image,
            ds_Image,
            b_Main,
        }: ProductImages
    ) {
        this.cd_Product = cd_Product
        this.cd_Product_Image = cd_Product_Image
        this.ds_Image = ds_Image
        this.b_Main = b_Main
    }
}