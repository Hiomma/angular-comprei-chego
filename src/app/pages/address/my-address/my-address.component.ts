import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InsertAddressesForm } from 'src/app/forms/addresses/insert-addresses.form';
import { Addresses } from 'src/app/models/addresses/addresses.model';

interface IModal {
    objAddress: Addresses
}

@Component({
    selector: 'app-my-address',
    templateUrl: './my-address.component.html',
    styleUrls: ['./my-address.component.scss']
})
export class MyAddressComponent implements OnInit {

    /** @description Address's form group */
    objFormGroup = this.addressesForm.Get_Form

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: IModal,
        public dialogRef: MatDialogRef<MyAddressComponent>,
        private addressesForm: InsertAddressesForm,
        private router: Router,
        private dialogService: MatDialog
    ) { }

    ngOnInit(): void {
        if (this.data.objAddress) {
            this.objFormGroup.patchValue(this.data.objAddress)
        }
    }

    Back() {
        this.dialogRef.close()
    }

    Save() {
        this.dialogRef.close(this.objFormGroup.getRawValue())
    }

}
