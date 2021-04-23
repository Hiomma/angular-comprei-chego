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

export const objInsertAddresses = {
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

export const objUpdateAddresses = {
    header: [
        {
            field: "$set",
            type: "addresses_set_input"
        },
        {
            field: "$cd_Address",
            type: "Int!"
        }
    ],
    query: `
    update_addresses_by_pk(pk_columns: {cd_Address: $cd_Address}, _set: $set) {
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

export const objDeleteAddresses = {
    header: [
        {
            field: "$cd_Address",
            type: "Int!"
        }
    ],
    query: `
    delete_addresses_by_pk(cd_Address: $cd_Address) {
        cd_Address
    }
    `
}