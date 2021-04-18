export class Users {
    cd_User: number
    nm_User: string
    cd_Type: number
    ds_Image: string
    ds_Login: string
    ds_Password: string
    dt_Created: string
    dt_Updated: string
    b_Disabled: string
    nr_Cnpj: string
    ds_Document_Image: string
    nm_Seller_Name: string

    constructor(
        { cd_User,
            nm_User,
            cd_Type,
            ds_Image,
            ds_Login,
            ds_Password,
            dt_Created,
            dt_Updated,
            b_Disabled,
            nr_Cnpj,
            ds_Document_Image,
            nm_Seller_Name
        }: Users
    ) {
        this.cd_User = cd_User
        this.nm_User = nm_User
        this.cd_Type = cd_Type
        this.ds_Image = ds_Image
        this.ds_Login = ds_Login
        this.ds_Password = ds_Password
        this.dt_Created = dt_Created
        this.dt_Updated = dt_Updated
        this.b_Disabled = b_Disabled
        this.nr_Cnpj = nr_Cnpj
        this.ds_Document_Image = ds_Document_Image
        this.nm_Seller_Name = nm_Seller_Name
    }

}