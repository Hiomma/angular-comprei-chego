import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carts } from 'src/app/models/carts/carts.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    /** @description Cart's array */
    objArrayCart: Carts[] = []

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.objArrayCart = this.route.snapshot.data.objCart
    }
}
