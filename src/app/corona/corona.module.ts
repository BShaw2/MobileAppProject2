import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoronaPageRoutingModule } from './corona-routing.module';

import { CoronaPage } from './corona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoronaPageRoutingModule
  ],
  declarations: [CoronaPage]
})
export class CoronaPageModule {}
