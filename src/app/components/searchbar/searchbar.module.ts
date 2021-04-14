import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchbarComponent } from './searchbar.component';




@NgModule({
    declarations: [
        SearchbarComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
    ],
    exports: [
        SearchbarComponent
    ]
})
export class SearchbarModule { }
