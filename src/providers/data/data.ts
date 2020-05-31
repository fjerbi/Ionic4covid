
import { Data } from './../../shared/data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DishProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataProvider {
  posts: any;
  constructor(public http: Http,
              private processHTTPMsgService: ProcessHttpmsgProvider) { }

              getLeaders(): Observable<Data[]> {
                return this.http.get(baseURL + '?region_name=Tunisia')
                                .map(res => { return this.processHTTPMsgService.extractData(res); })
                                .catch(error => { return this.processHTTPMsgService.handleError(error); });
              }

  getFeaturedData() {
 return   this.http.get('https://covid-api.com/api/reports?region_name=Tunisia').map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      console.log( this.posts);
  });

  }

}
