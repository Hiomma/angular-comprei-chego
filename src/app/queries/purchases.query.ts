export const objPurchasesQuery = {
    header: [
        {
            field: "$cd_Buyer",
            type: "Int!"
        }
    ],
    query: `
    purchases(order_by: {dt_Created: desc}, where: {cd_Buyer: {_eq: $cd_Buyer}}) {
        vl_Total
        dt_Created
        cd_Purchase
        purchase_Products {
          nr_Quantity
          product {
            cd_Product
            ds_Image
            nm_Product
          }
          vl_Products_Total
        }
      }
    `
}

export const objInsertPurchases = {
    header: [
        {
            field: "$object",
            type: "purchases_insert_input!"
        }
    ],
    query: `
    insert_purchases_one(object: purchases_insert_input!) {
        cd_Buyer
        cd_Payment
        cd_Purchase
        dt_Created
      }
          `
}


