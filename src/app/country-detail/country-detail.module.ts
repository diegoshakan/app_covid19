import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryDetailPageRoutingModule } from './country-detail-routing.module';

import { CountryDetailPage } from './country-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryDetailPageRoutingModule
  ],
  declarations: [CountryDetailPage]
})
export class CountryDetailPageModule {}
