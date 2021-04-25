import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'cc-quantity-selector',
    templateUrl: './quantity-selector.component.html',
    styleUrls: ['./quantity-selector.component.scss']
})
export class QuantitySelectorComponent implements OnInit {

    /** @description Controller of Quantity Number */
    @Input() control = new FormControl()

    /** @description Quantity Limit */
    @Input() nr_Limit = 1;

    constructor() { }

    ngOnInit(): void {
    }

    Decrease_Quantity() {
        if (this.control.value > 1) {
            this.control.setValue(this.control.value - 1)
        }
    }

    Increase_Quantity() {
        if (this.control.value < this.nr_Limit) {
            this.control.setValue(this.control.value + 1)
        }
    }

}
