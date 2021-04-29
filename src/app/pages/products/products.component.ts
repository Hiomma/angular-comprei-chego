import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompreiFacade } from 'src/app/facades/comprei.facade';
import { Products } from 'src/app/models/products/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    /** @description Product's array */
    objArrayProducts: Products[] = []

    constructor(private router: Router,
        private route: ActivatedRoute,
        private compreiFacade: CompreiFacade,
        private productsService: ProductsService,
    ) { }

    ngOnInit(): void {
        this.Load_Products()
    }

    async Load_Products() {
        this.objArrayProducts = await this.productsService.Get_Products_By_User(1)
    }

}
