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

    async Open_Modal(objAddress?: Addresses) {
        const modal = this.dialogService.open(MyAddressComponent, { data: { objAddress }, width: "800px" })

        const response = await modal.afterClosed().toPromise();

        if (response) {
            if (objAddress) {
                const objUpdate = await this.compreiFacade.Set_Update_Addresses(response)

                const index = this.objArrayAddresses.findIndex(element => element.cd_Address == response.cd_Address)

                this.objArrayAddresses[index] = objUpdate
            } else {
                response.cd_User = 1
                response.b_Main = false
                delete (response.cd_Address)
                const objInsert = await this.compreiFacade.Set_Insert_Addresses(response)


                this.objArrayAddresses.push(objInsert)
            }
        }
    }

    async Delete(objAddress: Addresses) {
        await this.compreiFacade.Set_Delete_Addresses(objAddress.cd_Address)

        const index = this.objArrayAddresses.findIndex(element => element.cd_Address == objAddress.cd_Address)

        if (index >= 0) {
            this.objArrayAddresses.splice(index, 1)
        }
    }
}
