import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImages } from 'src/app/models/products/product-images.model';
import { Products } from 'src/app/models/products/products.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    /** @description Product's Object  */
    objProduct: Products

    /** @description Image's array */
    objArraySecundaryPhotos: ProductImages[] = []

    /** @description Base64 of the image */
    ds_Main_Image: string = ''

    constructor(private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.objProduct = this.route.snapshot.data.objProduct

        this.ds_Main_Image = this.objProduct.product_Images.find(element => element.b_Main)?.ds_Image ?? ''
        this.objArraySecundaryPhotos = this.objProduct.product_Images.filter(element => !element.b_Main);
    }
}
