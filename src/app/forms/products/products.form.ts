import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class ProductsForm {

    constructor(
        private formBuilder: FormBuilder
    ) { }

    get Get_Form() {
        return this.formBuilder.group({
            cd_Product: [null],
            nm_Product: [null],
            vl_Product: [null],
            nr_Quantity: [null],
            nr_Sold: [null],
            cd_User: [null],
            ds_Detail: [null],
            dt_Created: [null],
            dt_Updated: [null],
            dt_Disabled: [null],
            ds_Image: [null],
        
            user: [null],
            product_Images: [null],
        
        })
    }

}
