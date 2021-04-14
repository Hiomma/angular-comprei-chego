import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';




@NgModule({
    declarations: [
        CheckboxComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [
        CheckboxComponent
    ]
})
export class CheckboxModule { }
