import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Carts } from 'src/app/models/carts/carts.model';
import { ProductsForm } from '../products/products.form';
import { UsersForm } from '../users/users.form';


@Injectable({
    providedIn: 'root'
})
export class CartsForm {

    constructor(
        private formBuilder: FormBuilder,
        private productsForm: ProductsForm,
        private usersForm: UsersForm,
    ) { }

    get Get_Form() {
        return this.formBuilder.group({
            cd_User: [null],
            cd_Product: [null],
            nr_Quantity: [null, [Validators.required, Validators.min(0)]],
            cd_Cart: [null],
            ds_Search: [null],
            b_Removed: [null],
            dt_Created: [null],
            product: this.productsForm.Get_Form,
            user: this.usersForm.Get_Form,
        })
    }

    Set_Value(objFormArray: FormArray, objValue: Carts[]) {
        objFormArray.clear()

        objValue.forEach((value) => {
            const auxForm = this.Get_Form

            auxForm.patchValue(value)

            objFormArray.push(auxForm)
        })
    }
}
