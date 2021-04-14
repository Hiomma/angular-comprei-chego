import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './product-card.component';



@NgModule({
    declarations: [
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
    ],
    exports: [
        ProductCardComponent
    ]
})
export class ProductCardModule { }
