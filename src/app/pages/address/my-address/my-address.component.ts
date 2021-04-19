import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InsertAddressesForm } from 'src/app/forms/addresses/insert-addresses.form';

@Component({
    selector: 'app-my-address',
    templateUrl: './my-address.component.html',
    styleUrls: ['./my-address.component.scss']
})
export class MyAddressComponent implements OnInit {

    /** @description Address's form group */
    objFormGroup = this.addressesForm.Get_Form

    constructor(
        // @Inject(MAT_DIALOG_DATA) public data: IModal,
        public dialogRef: MatDialogRef<MyAddressComponent>,
        private addressesForm: InsertAddressesForm,
        private router: Router,
        private dialogService: MatDialog
    ) { }

    ngOnInit(): void {
    }

    Back() {
        this.dialogRef.close()
    }

    Save() {
        this.dialogRef.close(this.objFormGroup.getRawValue())
    }

}
