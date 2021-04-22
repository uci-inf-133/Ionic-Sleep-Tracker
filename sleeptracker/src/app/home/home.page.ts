import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { ModalController } from '@ionic/angular';
import { LogsleepPage } from '../modals/logsleep/logsleep.page';
import { LogsleepinessPage } from '../modals/logsleepiness/logsleepiness.page';

import { Plugins } from '@capacitor/core';
import { element } from 'protractor';
const { Storage } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public sleepService: SleepService, private mc: ModalController) { }

  today = new Date();

  startTime() {
    var intervalVar = setInterval(function () {
      this.today = new Date().toISOString();
    }.bind(this),500)}

  async openSleepModal() {
    const modalLogsleep = await this.mc.create({
      component: LogsleepPage
    });
    return await modalLogsleep.present();
  }

  async openSleepinessModal() {
    const modalLogsleepiness = await this.mc.create({
      component: LogsleepinessPage
    });
    return await modalLogsleepiness.present();
  }



  public dinner: OvernightSleepData[];

  async passSleep() {

    const modal = await this.mc.create({
      component: LogsleepPage,
      componentProps: {
      }
    });

    modal.onWillDismiss().then(dataReturned => {
      this.allSleepData.push(dataReturned.data);
      Storage.set({key:dataReturned.data.id, value: JSON.stringify(dataReturned.data)}).then();
    });

    return await modal.present().then(_ => {
      // triggered when opening the modal
    });
  }

  async passSleepiness() {
    const modal = await this.mc.create({
      component: LogsleepinessPage,
      componentProps: {
      }
    });

    modal.onWillDismiss().then(dataReturned => {
      // trigger when about to close the modal
      this.allSleepData.push(dataReturned.data);
      Storage.set({key:dataReturned.data.id, value: JSON.stringify(dataReturned.data)}).then();
    });



    return await modal.present().then(_ => {
      // triggered when opening the modal
    });
  }

  ngOnInit() {
    //Storage.clear()
    this.startTime();
    Storage.keys().then((data) => {
      data.keys.forEach(x => {
        Storage.get({key: x}).then((result) =>{
          var dt = JSON.parse(result.value);
          if (dt.titleString === "Overnight Sleep"){
            var temp = new OvernightSleepData(new Date(dt.sleepStart), new Date(dt.sleepEnd));
            console.log(temp.sortDate);
            this.allSleepData.push(temp);
          } else {
            var tmp = new StanfordSleepinessData(dt.loggedValue, new Date(dt.loggedAt));
            console.log(tmp.sortDate);
            this.allSleepData.push(tmp);
          }

        })
      });
    });

    /* for each key get value and push to this.allSleepData */
  }

  /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
  get allSleepData() {
    return SleepService.AllSleepData;
  }

  
}
