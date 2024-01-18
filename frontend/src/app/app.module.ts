import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/partials/header/header.component';
import { HomeComponent } from './component/pages/home/home.component';
import { SearchComponent } from './component/partials/search/search.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { TagsComponent } from './component/partials/tags/tags.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { TitleComponent } from './component/partials/title/title.component';
import { NotFoundComponent } from './component/partials/not-found/not-found.component';
import { LoginPageComponent } from './component/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './component/pages/register-page/register-page.component';
import { InputContainerComponent } from './component/partials/input-container/input-container.component';
import { InputValidationComponent } from './component/partials/input-validation/input-validation.component';
import { TextInputComponent } from './component/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './component/partials/default-button/default-button.component';

import { CheckoutPageComponent } from './component/pages/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './component/partials/order-items-list/order-items-list.component'
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    RegisterPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    
    CheckoutPageComponent,
         OrderItemsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
