import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoundsPage } from './hounds';

@NgModule({
  declarations: [
    HoundsPage,
  ],
  imports: [
    IonicPageModule.forChild(HoundsPage),
  ],
})
export class HoundsPageModule {}
