import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';




@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule { }
