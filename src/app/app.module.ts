import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { AddressModule } from './pages/address/address.module';
import { CartModule } from './pages/cart/cart.module';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { ProductModule } from './pages/product/product.module';
import { ProductsModule } from './pages/products/products.module';
import { PurchaseModule } from './pages/purchase/purchase.module';
import { SearchModule } from './pages/search/search.module';
import { CartResolver } from './resolvers/cart.resolver';
import { ProductResolver } from './resolvers/product.resolver';

registerLocaleData(localePt, 'pt');

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
        HttpClientModule,
        ProductsModule,
        LoginModule,
    ],
    providers: [
        ProductResolver,
        CartResolver,
        {
            provide: LOCALE_ID,
            useValue: 'pt'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
