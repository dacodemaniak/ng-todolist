import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsed'
})
export class ElapsedPipe implements PipeTransform {

  public constructor(private httpClient: HttpClient) {}

  transform(value: Date, ...args: unknown[]): Promise<string> {
    return new Promise((resolve: any) => {
      this.httpClient.get<any>(
        'http://worldclockapi.com/api/json/utc/now'
      ).subscribe((utcDate: any) => {
        const apiDateTime: moment.Moment = moment(utcDate.currentDateTime);
        const todoDate: moment.Moment = moment(value);
  
        const dayDiff: number = apiDateTime.diff(todoDate, 'd');
  
        if (dayDiff > 0) {
          resolve(`Passé depuis ${dayDiff} jours`);
        } else if (dayDiff < 0) {
          resolve(`Dans ${dayDiff} jours`);
        } else {
          resolve(`Aujourd'hui`);
        }
      })
    });

    
    
  }

}
