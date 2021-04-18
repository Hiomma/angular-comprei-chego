import { Injectable } from '@angular/core';
import { CompreiFacade } from '../facades/comprei.facade';


@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private compreiFacade: CompreiFacade) {
    }

    Get_Sections_Products() {
        return this.compreiFacade.Get_Sections_Products()
    }
}
