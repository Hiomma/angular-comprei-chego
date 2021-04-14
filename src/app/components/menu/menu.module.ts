import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './menu.component';




@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule { }
