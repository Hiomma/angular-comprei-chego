import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class UsersForm {

    constructor(
        private formBuilder: FormBuilder
    ) { }

    get Get_Form() {
        return this.formBuilder.group({
            cd_User: [null],
            nm_User: [null],
            cd_Type: [null],
            ds_Image: [null],
            ds_Login: [null],
            ds_Password: [null],
            dt_Created: [null],
            dt_Updated: [null],
            b_Disabled: [null],
            nr_Cnpj: [null],
            ds_Document_Image: [null],
            nm_Seller_Name: [null],

        })
    }

}
