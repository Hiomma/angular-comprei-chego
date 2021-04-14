import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppBarModule } from 'src/app/components/app-bar/app-bar.module';
import { QuantitySelectorModule } from 'src/app/components/quantity-selector/quantity-selector.module';
import { ProductComponent } from './product.component';



@NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [
        CommonModule,
        AppBarModule,
        FlexLayoutModule,
        QuantitySelectorModule
    ]
})
export class ProductModule { }
