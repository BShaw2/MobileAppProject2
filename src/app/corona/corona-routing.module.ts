import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoronaPage } from './corona.page';

const routes: Routes = [
  {
    path: '',
    component: CoronaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoronaPageRoutingModule {}
