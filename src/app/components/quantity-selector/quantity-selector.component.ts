import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cc-quantity-selector',
    templateUrl: './quantity-selector.component.html',
    styleUrls: ['./quantity-selector.component.scss']
})
export class QuantitySelectorComponent implements OnInit {

    /** @description Quantity Number */
    nr_Quantity = 1

    /** @description Quantity Limit */
    @Input() nr_Limit = 10;

    constructor() { }

    ngOnInit(): void {
    }

    Decrease_Quantity() {
        if (this.nr_Quantity > 1) {
            this.nr_Quantity--
        }
    }

    Increase_Quantity() {
        if (this.nr_Quantity < this.nr_Limit) {
            this.nr_Quantity++
        }
    }

}
