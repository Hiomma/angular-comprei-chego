import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products/products.model';
import { Sections } from 'src/app/models/sections/sections.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    /** @description Section's Array */
    objArraySections: Sections[] = []

    /** @description Product's Array  */
    objArrayProducts: Products[] = []

    constructor(private router: Router,
        private homeService: HomeService) { }

    ngOnInit(): void {
        setTimeout(async () => {
            const response = await this.homeService.Get_Sections_Products()

            this.objArraySections = response.sections
            this.objArrayProducts = response.products
        })
    }

    Open_Product(objProduct: Products) {
        this.router.navigate([`product/${objProduct.cd_Product}/${objProduct.nm_Product.replace(/ /g, "-")}`])
    }
}
