import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-address',
    templateUrl: './my-address.component.html',
    styleUrls: ['./my-address.component.scss']
})
export class MyAddressComponent implements OnInit {

    constructor(
        private router: Router,
        private dialogService: MatDialog
    ) { }

    ngOnInit(): void {
    }

}
