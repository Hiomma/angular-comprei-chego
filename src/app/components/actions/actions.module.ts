import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ActionsComponent } from './actions.component';




@NgModule({
    declarations: [
        ActionsComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [
        ActionsComponent
    ]
})
export class ActionsModule { }
