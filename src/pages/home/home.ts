import { CovidmapPage } from './../covidmap/covidmap';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  posts: any;
  term: string;
country='';
date=new Date();
slideOpts = {
  initialSlide: 1,
  speed: 400
};

yesterday = new Date(Date.now() - 1728e5)
 latest_date =this.datepipe.transform(this.yesterday, 'yyyy-MM-dd');

  constructor(public navCtrl: NavController, public http: Http,public datepipe: DatePipe) {
;


}
  ngOnInit() {
    this.http.get('https://covid-api.com/api/reports?date='+this.latest_date).map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      console.log( this.yesterday);
      console.log( this.posts);
  });
  }

  covidmap(){
    this.navCtrl.push(CovidmapPage);
    }
}
