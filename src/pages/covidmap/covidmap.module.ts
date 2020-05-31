import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CovidmapPage } from './covidmap';

@NgModule({
  declarations: [
    CovidmapPage,
  ],
  imports: [
    IonicPageModule.forChild(CovidmapPage),
  ],
})
export class CovidmapPageModule {}
