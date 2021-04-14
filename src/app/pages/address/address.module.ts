import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppBarModule } from 'src/app/components/app-bar/app-bar.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { RadioButtonModule } from 'src/app/components/radio-button/radio-button.module';
import { AddressComponent } from './address.component';
import { MyAddressModule } from './my-address/my-address.module';



@NgModule({
    declarations: [
        AddressComponent
    ],
    imports: [
        CommonModule,
        AppBarModule,
        FlexLayoutModule,
        RadioButtonModule,
        MenuModule,
        MyAddressModule,
    ]
})
export class AddressModule { }
