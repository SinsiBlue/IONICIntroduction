import { map } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import {Observable}from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
 @Input('destinations') destinations$: Observable<Array<any>>;
 destinations: Array<any>;

  constructor() { }

  ngOnInit() {
    this.destinations$.pipe(
      map(data => data.departures.departure))
      .subscribe(data => {
        console.log(data);
        const a = [];
        data.forEach(d => a.push({station: d.station, time: new Date(parseInt(d.time*1000))}));

        this.destinations = a;
      });
  }

}
