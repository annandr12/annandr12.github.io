import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IData } from './../data';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {

  @Input() public dataSet: IData[];
  @Input() public selectedItem: IData;
  @Input() public types: object;
  @Output() selectedChange = new EventEmitter();

  public currentType = 'all';


  public selectItem(item) {
    // console.log(item);
    this.selectedChange.emit(item);
  }
  public filter(key) {
    this.currentType = key;
    // console.log('this.dataSet', this.dataSet);
    // this.selectedChange.emit(item);
  }
}
