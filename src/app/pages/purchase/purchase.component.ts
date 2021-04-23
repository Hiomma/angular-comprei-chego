import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompreiFacade } from 'src/app/facades/comprei.facade';
import { Purchases } from 'src/app/models/purchases/purchases.model';

@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

    /** @description Purchase's Array */
    objArrayPurchases: Purchases[] = []

    constructor(private router: Router,
        private compreiFacade: CompreiFacade,
    ) { }

    ngOnInit(): void {
        setTimeout(async () => {
            this.objArrayPurchases = await this.compreiFacade.Get_Purchases(1)
        })
    }
}
