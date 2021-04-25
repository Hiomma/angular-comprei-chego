import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cc-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    objArrayMenu = [
        { ds_Label: "Início", ds_Link: 'addresses', ds_Image: 'assets/icons/home.svg', },
        { ds_Label: "Compras", ds_Link: 'purchases', ds_Image: 'assets/icons/basket.svg' },
        { ds_Label: "Vendas", ds_Link: 'sales', ds_Image: 'assets/icons/basket.svg' },
        { ds_Label: "Produtos", ds_Link: 'products', ds_Image: 'assets/icons/basket.svg' },
    ]

    constructor() { }

    ngOnInit(): void {
    }


}
