import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuantitySelectorComponent } from './quantity-selector.component';




@NgModule({
    declarations: [
        QuantitySelectorComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        QuantitySelectorComponent
    ]
})
export class QuantitySelectorModule { }
