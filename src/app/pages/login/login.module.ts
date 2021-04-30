import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppBarModule } from 'src/app/components/app-bar/app-bar.module';
import { InputModule } from 'src/app/components/input/input.module';
import { LoginComponent } from './login.component';



@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppBarModule,
        FlexLayoutModule,
        InputModule,
    ]
})
export class LoginModule { }
