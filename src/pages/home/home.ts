import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecomendationServiceProvider} from '../../Providers/recomendation-service/recomendation-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
     public recomendations: any;

  constructor(public navCtrl: NavController, public recomendationServiceProvider: RecomendationServiceProvider) {
    this.loadRecomendation();
  }

  public loadRecomendation()
  {
    //this.recomendations='[{"_id":"5b746027f7cc850004339c4a","Stock":"TCS","CMP":"100","target":"110","stopploss":"90","RecomendedOn":"2018-08-15T00:00:00.000Z","CallType":"Stocks","__v":0},{"_id":"5b74604ff7cc850004339c4b","Stock":"crudeoil","CMP":"4000","target":"4010","stopploss":"3990","RecomendedOn":"2018-08-15T00:00:00.000Z","CallType":"Commodity","__v":0}]';
    console.log('test');
    this.recomendationServiceProvider.GetRecomendations()
    .then(data=> {
      console.log('xx');
      console.log(data);
     this.recomendations= data;
    })
  }

}
