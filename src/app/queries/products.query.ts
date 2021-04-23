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

export const objInsertProducts = {
    header: [
        {
            field: "$object",
            type: "products_insert_input!"
        }
    ],
    query: `
    insert_products_one(object: $object) {
        cd_Product
        cd_User
        ds_Detail
        ds_Image
        dt_Created
        dt_Disabled
        dt_Updated
        nm_Product
        nr_Sold
        nr_Quantity
        vl_Product
      }
    `
}

export const objUpdateProducts = {
    header: [
        {
            field: "$set",
            type: "products_insert_input"
        },
        {
            field: "$cd_Product",
            type: "Int!"
        }
    ],
    query: `
    update_products_by_pk(pk_columns: {cd_Product: $cd_Product}, _set: $set) {
        cd_Product
        cd_User
        ds_Detail
        ds_Image
        dt_Created
        dt_Disabled
        dt_Updated
        nm_Product
        nr_Quantity
        nr_Sold
        vl_Product
      }
    `
}

export const objDeleteProducts = {
    header: [
        {
            field: "$cd_Product",
            type: "Int!"
        }
    ],
    query: `
    delete_products_by_pk(cd_Product: $cd_Product) {
        cd_Product
      }
    `
}

