import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SearchbarModule } from '../searchbar/searchbar.module';
import { AppBarComponent } from './app-bar.component';



@NgModule({
    declarations: [
        AppBarComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        SearchbarModule,
        RouterModule,
    ],
    exports: [
        AppBarComponent
    ]
})
export class AppBarModule { }
