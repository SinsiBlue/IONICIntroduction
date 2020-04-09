import { StationService } from './api/station.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-train',
  templateUrl: './train.page.html',
  styleUrls: ['./train.page.scss'],
})
export class TrainPage implements OnInit {

  destinations$: Observable<Array<any>>;
  dest = ['salut', 'coucou'];

  constructor(private stationService: StationService) { }

  ngOnInit():void {
    this.destinations$ = this.stationService.Departs$;
  }

}
