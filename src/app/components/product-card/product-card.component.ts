import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products/products.model';

@Component({
    selector: 'cc-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    /** @description Product that you want to show */
    @Input() objProduct: Products

    constructor() { }

    ngOnInit(): void {
    }

}
