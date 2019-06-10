import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsSubSocialPage } from './tabs-sub-social.page';

const routes: Routes = [
  {
    path: '',
    component: TabsSubSocialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsSubSocialPage]
})
export class TabsSubSocialPageModule {}
