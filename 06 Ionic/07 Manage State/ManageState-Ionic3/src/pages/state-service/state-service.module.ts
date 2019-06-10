import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StateServicePage } from './state-service';

@NgModule({
  declarations: [
    StateServicePage,
  ],
  imports: [
    IonicPageModule.forChild(StateServicePage),
  ],
})
export class StateServicePageModule {}
