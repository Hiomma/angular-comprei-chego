import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressModule } from './pages/address/address.module';
import { CartModule } from './pages/cart/cart.module';
import { HomeModule } from './pages/home/home.module';
import { ProductModule } from './pages/product/product.module';
import { PurchaseModule } from './pages/purchase/purchase.module';
import { SearchModule } from './pages/search/search.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductModule,
        HomeModule,
        SearchModule,
        CartModule,
        AddressModule,
        PurchaseModule,
        BrowserAnimationsModule,
        GraphQLModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
