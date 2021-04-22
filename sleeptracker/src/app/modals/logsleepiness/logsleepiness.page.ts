import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { StanfordSleepinessData } from '@app/data/stanford-sleepiness-data';


@Component({
  selector: 'app-logsleepiness',
  templateUrl: './logsleepiness.page.html',
  styleUrls: ['./logsleepiness.page.scss'],
})
export class LogsleepinessPage implements OnInit {
  ScaleValues = StanfordSleepinessData.ScaleValues;
  sleepiness: StanfordSleepinessData;
  position: number = 1;
  selected: boolean;
  sleepScale: string = this.ScaleValues[this.position];
  loggedAt: Date;
  constructor(private mcSleepiness: ModalController, private pickerController: PickerController) {}

  ngOnInit() {
    this.selected = false;
  }

  // async showPicker() {
  //   let options: PickerOptions = {
  //     buttons: [
  //       {
  //         text: "Cancel",
  //         role: 'cancel'
  //       },
  //       {
  //         text:'Ok',
  //         handler:(value:any) => {
  //           let index = this.ScaleValues.findIndex(x => x === value.Sleepiness.text);
  //           console.log(index);
  //           this.loggedAt = new Date(this.loggedAt);
  //           this.sleepiness = new StanfordSleepinessData(index, this.loggedAt);
  //           this.selected = true;
  //           console.log(this.sleepiness);
  //         }
  //       }
  //     ],
  //     columns:[{
  //       name:'Sleepiness',
  //       options:this.getColumnOptions()
  //     }]
  //   };
  //
  //   let picker = await this.pickerController.create(options);
  //   picker.present()
  // }
  //
  // getColumnOptions(){
  //   let options = [];
  //   this.ScaleValues.forEach(x => {
  //     options.push({text:x,value:x});
  //   });
  //   return options;
  // }

  async rangeChanged(){
    console.log(this.position);
    this.sleepScale = this.ScaleValues[this.position];
  }

  async closeModal() {
    this.loggedAt = new Date(this.loggedAt);
    this.sleepiness = new StanfordSleepinessData(this.position, this.loggedAt);
    await this.mcSleepiness.dismiss(this.sleepiness);
  }

}
