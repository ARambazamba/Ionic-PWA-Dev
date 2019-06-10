import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservableCrudPage } from './observable-crud';

@NgModule({
  declarations: [
    ObservableCrudPage,
  ],
  imports: [
    IonicPageModule.forChild(ObservableCrudPage),
  ],
})
export class ObservableCrudPageModule {}
