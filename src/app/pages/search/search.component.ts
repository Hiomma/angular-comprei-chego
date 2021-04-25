import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products/products.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    /** @description Product's Array  */
    objArrayProducts: Products[] = []

    constructor(private router: Router,
        private searchService: SearchService,
    ) { }

    ngOnInit(): void {
        this.Load_Products()
    }

    async Load_Products() {
        this.objArrayProducts = await this.searchService.Get_Products()
    }

    Open_Product(objProduct: Products) {
        this.router.navigate([`product/${objProduct.cd_Product}/${objProduct.nm_Product.replace(/ /g, "-")}`])
    }
}
