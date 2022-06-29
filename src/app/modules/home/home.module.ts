import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { MapComponent } from './map/map.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ApikeyModalComponent } from './map/components/apikey-modal/apikey-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    CityComponent,
    ApikeyModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HomeRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule,
  ],
})
export class HomeModule {}
