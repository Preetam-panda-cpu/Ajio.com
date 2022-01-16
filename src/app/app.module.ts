import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { HomeComponent } from './PAGES/home/home.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { LoginComponent } from './PAGES/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './COMPONENTS/banner/banner.component';
import { MatCardModule } from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import { CheckoutSubtotalComponent } from './COMPONENTS/checkout-subtotal/checkout-subtotal.component';
import { HoverComponent } from './hover/hover.component';
import { OnlinestoreComponent } from './onlinestore/onlinestore.component';
import { FavbrandComponent } from './favbrand/favbrand.component';
import { StylishhomeComponent } from './stylishhome/stylishhome.component';
import { AjiocaresComponent } from './ajiocares/ajiocares.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutProductsComponent,
    CheckoutSubtotalComponent,
    HoverComponent,
    OnlinestoreComponent,
    FavbrandComponent,
    StylishhomeComponent,
    AjiocaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
