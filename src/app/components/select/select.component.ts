import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'cc-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

    /** @description Variable to show the label  */
    @Input() ds_Label: string = ""

    /** @description Variable to guard what atribute will be used by option to make the description  */
    @Input() ds_Description: string = ""

    /** @description Variable to guard what atribute will be used by option to make the value  */
    @Input() ds_Value: string = ""

    /** @description Array to make the option's list */
    @Input() objArrayItens: any[] = [];

    /** @description Form Control to control the select */
    @Input() control: FormControl = new FormControl();

    constructor() { }

    ngOnInit(): void {
    }

}
