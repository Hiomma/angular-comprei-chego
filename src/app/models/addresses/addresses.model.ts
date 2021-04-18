export class Addresses {
    cd_Address: number
    nm_Address: string
    nr_Cep: string
    nm_Street: string
    nr_Number: number
    nm_District: string
    nm_City: string
    nm_UF: string
    b_Main: boolean
    cd_User: number

    constructor(
        { cd_Address,
            nm_Address,
            nr_Cep,
            nm_Street,
            nr_Number,
            nm_District,
            nm_City,
            nm_UF,
            b_Main,
            cd_User,
        }: Addresses
    ) {
        this.cd_Address = cd_Address
        this.nm_Address = nm_Address
        this.nr_Cep = nr_Cep
        this.nm_Street = nm_Street
        this.nr_Number = nr_Number
        this.nm_District = nm_District
        this.nm_City = nm_City
        this.nm_UF = nm_UF
        this.b_Main = b_Main
        this.cd_User = cd_User
    }
}

