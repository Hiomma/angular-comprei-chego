import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CompreiFacade } from "../facades/comprei.facade";

@Injectable()

export class ProductResolver implements Resolve<any> {

    constructor(
        private compreiFacade: CompreiFacade
    ) { }

    async resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return await this.compreiFacade.Get_Product(Number(route.paramMap.get("cd_Product")));
    }

}