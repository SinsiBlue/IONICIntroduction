import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private httpClient: HttpClient) { }

  get Departs$(): Observable<Array<string>> {
    return this.httpClient.get<any>('http://api.irail.be/liveboard/?id=BE.NMBS.008812005&lang=fr&format=json');
  }
}
