import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './component/pages/login-page/login-page.component';
import { RegisterPageComponent } from './component/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './component/pages/checkout-page/checkout-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'checkout',component:CheckoutPageComponent},

  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./component/pages/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./component/pages/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allfoods',loadChildren:()=>import('./component/pages/admin/allfoods/allfoods.module').then(m=>m.AllfoodsModule)},
    {path:'addfood',loadChildren:()=>import('./component/pages/admin/addfood/addfood.module').then(m=>m.AddfoodModule)},
    {path:'loginadmin',loadChildren:()=>import('./component/pages/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
