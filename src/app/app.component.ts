import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IData, data$, IType, types } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data$: Observable<IData[]> = data$;

  public dataSet: IData[];
  public selectedItem: IData;
  public types: IType[] = types;

  public ngOnInit(): void {
    console.log(this.types);
    this.data$.subscribe((dataSet: IData[]) => {
      this.dataSet = dataSet;
      this.selectedItem = dataSet[0];
    });
  }
}
