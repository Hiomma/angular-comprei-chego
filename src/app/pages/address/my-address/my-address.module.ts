import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { AppBarModule } from 'src/app/components/app-bar/app-bar.module';
import { CheckboxModule } from 'src/app/components/checkbox/checkbox.module';
import { InputModule } from 'src/app/components/input/input.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { RadioButtonModule } from 'src/app/components/radio-button/radio-button.module';
import { MyAddressComponent } from './my-address.component';



@NgModule({
    declarations: [
        MyAddressComponent
    ],
    imports: [
        CommonModule,
        AppBarModule,
        FlexLayoutModule,
        RadioButtonModule,
        MenuModule,
        InputModule,
        CheckboxModule,
        MatDialogModule
    ]
})
export class MyAddressModule { }
