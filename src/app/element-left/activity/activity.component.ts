import { Component, OnInit, Input } from '@angular/core';
import { IData } from './../../data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input() public item: IData;

  constructor() { }

  ngOnInit() {
  }

}
