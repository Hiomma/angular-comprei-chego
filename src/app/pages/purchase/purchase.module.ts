import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppBarModule } from 'src/app/components/app-bar/app-bar.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { PurchaseComponent } from './purchase.component';



@NgModule({
    declarations: [
        PurchaseComponent
    ],
    imports: [
        CommonModule,
        AppBarModule,
        FlexLayoutModule,
        MenuModule
    ]
})
export class PurchaseModule { }
