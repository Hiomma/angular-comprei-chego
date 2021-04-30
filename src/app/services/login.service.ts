import { Injectable } from '@angular/core';
import { CompreiFacade } from '../facades/comprei.facade';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private compreiFacade: CompreiFacade) {
    }
}
