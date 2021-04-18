export const objProductsQuery = {
    header: [],
    query: `
    products {
        nm_Product
        nr_Quantity
        nr_Sold
        vl_Product
        cd_Product
        ds_Image
      }
    `
}

export const objProductQuery = {
    header: [{
        field: "$cd_Product",
        type: "Int!"
    }],
    query: `
    products_by_pk(cd_Product: $cd_Product) {
        cd_Product
        ds_Detail
        ds_Image
        nm_Product
        nr_Quantity
        nr_Sold
        vl_Product
        user {
          ds_Image
          cd_User
          nm_Seller_Name
        }
        product_Images {
          b_Main
          cd_Product_Image
          ds_Image
        }
      }
    `
}