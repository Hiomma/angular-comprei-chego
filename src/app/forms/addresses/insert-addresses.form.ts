import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class InsertAddressesForm {

    constructor(
        private formBuilder: FormBuilder
    ) { }

    get Get_Form() {
        return this.formBuilder.group({
            cd_Address: [null],
            nm_Address: [null, [Validators.required, Validators.minLength(4)]],
            nr_Cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
            nm_Street: [null, [Validators.required, Validators.minLength(4)]],
            nr_Number: [null, [Validators.required]],
            nm_District: [null, [Validators.required]],
            nm_City: [null, [Validators.required]],
            nm_UF: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
            b_Main: [null, [Validators.required]],
            cd_User: [null],
        })
    }

}
