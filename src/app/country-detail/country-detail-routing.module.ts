import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryDetailPage } from './country-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CountryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryDetailPageRoutingModule {}
