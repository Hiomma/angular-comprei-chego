export const objCartsQuery = {
    header: [
        {
            field: "$cd_User",
            type: "Int!"
        }
    ],
    query: `
    `
}

export const objInsertCarts = {
    header: [
        {
            field: "$object",
            type: "carts_insert_input!"
        }
    ],
    query: `
    insert_carts_one(object: $object) {
        b_Removed
        cd_Cart
        cd_Product
        cd_User
        ds_Search
        dt_Created
        nr_Quantity
      }
    `
}

export const objUpdateCarts = {
    header: [
        {
            field: "$set",
            type: "carts_set_input"
        },
        {
            field: "$cd_Cart",
            type: "Int!"
        }
    ],
    query: `
    update_carts_by_pk(pk_columns: {cd_Cart: $cd_Cart}, _set: $set) {
        b_Removed
        cd_Cart
        cd_Product
        cd_User
        ds_Search
        dt_Created
        nr_Quantity
      }
    `
}

export const objDeleteCarts = {
    header: [
        {
            field: "$cd_Cart",
            type: "Int!"
        }
    ],
    query: `
    delete_carts_by_pk(cd_Cart: $cd_Cart) {
        cd_Cart
      }
    `
}