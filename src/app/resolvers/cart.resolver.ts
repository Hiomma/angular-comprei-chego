import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CompreiFacade } from "../facades/comprei.facade";

@Injectable()

export class CartResolver implements Resolve<any> {

    constructor(
        private compreiFacade: CompreiFacade
    ) { }

    async resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return await this.compreiFacade.Get_Carts(1);
    }

}