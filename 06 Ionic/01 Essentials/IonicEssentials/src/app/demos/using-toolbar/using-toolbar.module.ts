import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsingToolbarPage } from './using-toolbar.page';

const routes: Routes = [
  {
    path: '',
    component: UsingToolbarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsingToolbarPage]
})
export class UsingToolbarPageModule {}
