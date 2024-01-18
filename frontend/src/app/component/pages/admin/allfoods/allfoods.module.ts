import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllfoodsRoutingModule } from './allfoods-routing.module';
import { AllfoodsComponent } from './allfoods.component';


@NgModule({
  declarations: [
    AllfoodsComponent
  ],
  imports: [
    CommonModule,
    AllfoodsRoutingModule
  ]
})
export class AllfoodsModule { }
