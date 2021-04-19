import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'cc-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    /** @description Variable to show the label  */
    @Input() ds_Label: string = ""

    /** @description Variable to guard the placeholder  */
    @Input() ds_Placeholder: string = ""

    /** @description Form Control to control the input */
    @Input() control: FormControl | null = new FormControl();

    constructor() { }

    ngOnInit(): void {
    }

}
