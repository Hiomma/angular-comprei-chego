import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cc-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

    /** @description Variable that save placeholder's value  */
    @Input() ds_Placeholder = "Pesquise por produtos, marcas ou lojas"

    constructor() { }

    ngOnInit(): void {
    }

}
