import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActionsModule } from 'src/app/components/actions/actions.module';
import { AppBarModule } from 'src/app/components/app-bar/app-bar.module';
import { CheckboxModule } from 'src/app/components/checkbox/checkbox.module';
import { QuantitySelectorModule } from 'src/app/components/quantity-selector/quantity-selector.module';
import { SelectModule } from 'src/app/components/select/select.module';
import { CartComponent } from './cart.component';



@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        AppBarModule,
        FlexLayoutModule,
        QuantitySelectorModule,
        CheckboxModule,
        ActionsModule,
        SelectModule,
    ]
})
export class CartModule { }
