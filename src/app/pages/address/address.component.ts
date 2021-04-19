import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompreiFacade } from 'src/app/facades/comprei.facade';
import { Addresses } from 'src/app/models/addresses/addresses.model';
import { MyAddressComponent } from './my-address/my-address.component';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

    /** @description Address's arraay  */
    objArrayAddresses: Addresses[] = []

    constructor(
        private router: Router,
        private dialogService: MatDialog,
        private compreiFacade: CompreiFacade
    ) { }

    ngOnInit(): void {
        setTimeout(async () => this.objArrayAddresses = await this.compreiFacade.Get_Addresses(1))
    }

    async Open_Modal(objAddress?: any) {
        const modal = this.dialogService.open(MyAddressComponent, { width: "800px" })

        const response = await modal.afterClosed().toPromise();

        if (objAddress) {

        } else {
            response.cd_User = 1
            response.b_Main = false
            delete (response.cd_Address)
            const objInsert = await this.compreiFacade.Set_Insert_Addresses(response)


            this.objArrayAddresses.push(objInsert)
        }
    }
}
