import { Component, OnInit, Input } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import {OvernightSleepData} from '@app/data/overnight-sleep-data'

@Component({
  selector: 'app-logsleep',
  templateUrl: './logsleep.page.html',
  styleUrls: ['./logsleep.page.scss'],
})
export class LogsleepPage implements OnInit {

  startTime: Date;
  endTime: Date;
  sleepTime: OvernightSleepData;

  constructor(private mcSleep: ModalController) { }

  ngOnInit() {
  }

  setDate() {
    console.log(this.startTime);
    console.log(this.endTime);
    this.startTime = new Date(this.startTime);
    this.endTime = new Date(this.endTime);
    this.sleepTime = new OvernightSleepData(this.startTime, this.endTime);
    console.log(this.sleepTime);
    }

  async closeModal() {
    await this.mcSleep.dismiss(this.sleepTime);
  }
}
