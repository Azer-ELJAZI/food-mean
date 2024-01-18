import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddfoodRoutingModule } from './addfood-routing.module';
import { AddfoodComponent } from './addfood.component';


@NgModule({
  declarations: [
    AddfoodComponent
  ],
  imports: [
    CommonModule,
    AddfoodRoutingModule
  ]
})
export class AddfoodModule { }
