import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { QuantitySelectorComponent } from './quantity-selector.component';




@NgModule({
    declarations: [
        QuantitySelectorComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [
        QuantitySelectorComponent
    ]
})
export class QuantitySelectorModule { }
