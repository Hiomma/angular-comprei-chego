import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './pages/address/address.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "product", component: ProductComponent
    },
    {
        path: "search", component: SearchComponent
    },
    {
        path: "cart", component: CartComponent
    },
    {
        path: "address", component: AddressComponent
    },
    {
        path: "purchase", component: PurchaseComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
