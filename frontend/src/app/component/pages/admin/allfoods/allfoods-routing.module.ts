import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllfoodsComponent } from './allfoods.component';

const routes: Routes = [
  {path:'',component:AllfoodsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllfoodsRoutingModule { }
