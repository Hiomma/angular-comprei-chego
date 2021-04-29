import { Injectable } from '@angular/core';
import { CompreiFacade } from '../facades/comprei.facade';


@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private compreiFacade: CompreiFacade) {
    }

    Get_Products_By_User(cd_User: number) {
        return this.compreiFacade.Get_Products_By_User(cd_User)
    }
}
