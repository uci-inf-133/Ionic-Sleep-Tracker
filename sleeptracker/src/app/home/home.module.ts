import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { LogsleepPage } from '../modals/logsleep/logsleep.page';
import { LogsleepinessPage } from '../modals/logsleepiness/logsleepiness.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, LogsleepPage, LogsleepinessPage],
  entryComponents: [LogsleepPage, LogsleepinessPage]
})
export class HomePageModule {}
