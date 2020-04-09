import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainPageRoutingModule } from './train-routing.module';

import { TrainPage } from './train.page';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainPageRoutingModule
  ],
  declarations: [TrainPage, ContainerComponent]
})
export class TrainPageModule {}
