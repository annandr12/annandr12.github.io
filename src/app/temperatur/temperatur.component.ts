import { Component, Input } from '@angular/core';
import { IData } from './../data';

@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent {

  @Input() public item: IData;

}
