import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartsForm } from 'src/app/forms/carts/carts.form';
import { Carts } from 'src/app/models/carts/carts.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    /** @description Cart's array */
    objFormArrayCart: FormArray = new FormArray([])

    /** @description Selected's array */
    objArraySelected: Carts[] = []

    /** @description It guards the value of product's total */
    vl_Total = 0

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cartsForm: CartsForm
    ) { }

    ngOnInit(): void {
        this.cartsForm.Set_Value(this.objFormArrayCart, this.route.snapshot.data.objCart)
    }
}
