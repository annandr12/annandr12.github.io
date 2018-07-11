import { Component, Input } from '@angular/core';
import { IData } from './../data';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent {

  @Input() public item: IData;
}
