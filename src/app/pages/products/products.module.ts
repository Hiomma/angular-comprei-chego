import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActionsModule } from 'src/app/components/actions/actions.module';
import { AppBarModule } from 'src/app/components/app-bar/app-bar.module';
import { QuantitySelectorModule } from 'src/app/components/quantity-selector/quantity-selector.module';
import { ProductsComponent } from './products.component';



@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        AppBarModule,
        FlexLayoutModule,
        QuantitySelectorModule,
        ActionsModule,
    ]
})
export class ProductsModule { }
