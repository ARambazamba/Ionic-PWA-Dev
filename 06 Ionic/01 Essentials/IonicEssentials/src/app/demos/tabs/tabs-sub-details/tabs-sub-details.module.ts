import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsSubDetailsPage } from './tabs-sub-details.page';

const routes: Routes = [
  {
    path: '',
    component: TabsSubDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsSubDetailsPage]
})
export class TabsSubDetailsPageModule {}
