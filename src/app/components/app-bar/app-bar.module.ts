import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchbarModule } from '../searchbar/searchbar.module';
import { AppBarComponent } from './app-bar.component';



@NgModule({
    declarations: [
        AppBarComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        SearchbarModule
    ],
    exports: [
        AppBarComponent
    ]
})
export class AppBarModule { }
