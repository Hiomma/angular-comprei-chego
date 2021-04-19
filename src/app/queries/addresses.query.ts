export const objAddressesQuery = {
    header: [
        {
            field: "$cd_User",
            type: "Int!"
        }
    ],
    query: `
    addresses(where: {cd_User: {_eq: $cd_User}}) {
        b_Main
        cd_Address
        nm_Address
        nm_City
        nm_District
        nm_Street
        nm_UF
        nr_Cep
        nr_Number
      }
    `
}

export const objAddressesAdd = {
    header: [
        {
            field: "$object",
            type: "addresses_insert_input!"
        }
    ],
    query: `
    insert_addresses_one(object: $object) {
        b_Main
        cd_Address
        nm_Address
        nm_City
        nm_District
        nm_Street
        nm_UF
        nr_Cep
        nr_Number
    }
    `
}