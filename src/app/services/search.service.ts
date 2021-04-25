import { Injectable } from '@angular/core';
import { CompreiFacade } from '../facades/comprei.facade';


@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private compreiFacade: CompreiFacade) {
    }

    Get_Products() {
        return this.compreiFacade.Get_Products()
    }
}
