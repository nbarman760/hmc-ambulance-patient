import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookAmbulaceDetailsPage } from './book-ambulace-details.page';

const routes: Routes = [
  {
    path: '',
    component: BookAmbulaceDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookAmbulaceDetailsPage]
})
export class BookAmbulaceDetailsPageModule {}
