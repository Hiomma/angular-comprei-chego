import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MyAddressComponent } from './my-address/my-address.component';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

    constructor(
        private router: Router,
        private dialogService: MatDialog
    ) { }

    ngOnInit(): void {
    }

    Open_Modal(objAddress?: any) {

        this.dialogService.open(MyAddressComponent, { width: "800px" })

    }
}
