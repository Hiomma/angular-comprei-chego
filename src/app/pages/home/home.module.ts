import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppBarModule } from 'src/app/components/app-bar/app-bar.module';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';
import { HomeComponent } from './home.component';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        AppBarModule,
        FlexLayoutModule,
        ProductCardModule
    ]
})
export class HomeModule { }
