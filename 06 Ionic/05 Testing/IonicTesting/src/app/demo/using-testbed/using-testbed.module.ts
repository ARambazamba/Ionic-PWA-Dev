import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsingTestbedPage } from './using-testbed.page';

const routes: Routes = [
  {
    path: '',
    component: UsingTestbedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsingTestbedPage]
})
export class UsingTestbedPageModule {}
